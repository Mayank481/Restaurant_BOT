const {
  ComponentDialog,
  WaterfallDialog,
  ChoicePrompt,
  ChoiceFactory,
  NumberPrompt,
  TextPrompt,
  Dialog,
} = require("botbuilder-dialogs");
const { CardFactory } = require("botbuilder");
const { dialog } = require("../constants/DialogIds");
const { BookTableCard, ShowFormCard } = require("../Cards/index");
const { LuisRecognizer } = require("botbuilder-ai");
const Recognizers = require("@microsoft/recognizers-text-suite");

const luisConfig = {
  applicationId: "568d9605-2fe8-4d46-b530-5dd53803cc0e",
  endpointKey: "8181e9a3208541eab8d205ac6e18f1d1",
  endpoint: "https://restaurantbookingstatus.cognitiveservices.azure.com/",
};

const ChoicePromptDialog = "ChoicePromptDialog";
const NumberPromptDialog = "NumberPromptDialog";
const TextPromptDialog = "TextPromptDialog";

class BookTableDialog extends ComponentDialog {
  constructor(conversationState) {
    super(dialog.BOOKTABLE_DIALOG);

    if (!conversationState) throw new Error("conversationState state required");

    this.conversationState = conversationState;
    this.BookTableStateAccessor =
      this.conversationState.createProperty("BookTableState");
    this.addDialog(new ChoicePrompt(ChoicePromptDialog));
    this.addDialog(new NumberPrompt(NumberPromptDialog));
    this.addDialog(new NumberPrompt(TextPromptDialog));

    // this.addDialog(
    //   new WaterfallDialog(dialog.BOOKTABLE_DIALOG_WF1, [
    //     this.askbooking.bind(this),
    //     this.askNoOfPerson.bind(this),
    //     this.askBookingDate.bind(this),
    //     this.askBookingTime.bind(this),
    //     this.applyRequest.bind(this),
    //   ])
    // );
    this.recognizer = new LuisRecognizer(luisConfig, {
      apiVersion: "v3",
    });

    this.addDialog(
      new WaterfallDialog(dialog.BOOKTABLE_DIALOG_WITHFORM_WF1, [
        this.preprocessEntities.bind(this),
        this.askbooking.bind(this),
        this.askNoOfPerson.bind(this),
        this.askBookingDate.bind(this),
        this.askBookingTime.bind(this),
        this.applyRequest.bind(this),
      ])
    );

    this.initialDialogId = dialog.BOOKTABLE_DIALOG_WITHFORM_WF1;
  }

  ////-----------------------------preprocessEntities ---------------------///
  async preprocessEntities(stepContext) {
    try {
      if (stepContext.options && stepContext.options.luisResult) {
        let bookEntities = stepContext.options.entities.type
          ? stepContext.options.entities.type[0]
          : null;

        let numberEntities = stepContext.options.entities.number
          ? stepContext.options.entities.number[0]
          : null;

        let dateTimEntities = stepContext.options.entities.datetimeV2
          ? stepContext.options.entities.datetimeV2
          : null;
        let dateFrameObj = {};

        if (dateTimEntities != null) {
          dateTimEntities.forEach((subEntities) => {
            if (subEntities.type === "date") {
              dateFrameObj["date"] =
                subEntities.values[0]["resolution"][0]["value"];
            }
            if (subEntities.type == "time") {
              dateFrameObj["time"] =
                subEntities.values[0]["resolution"][0]["value"];
            }
          });
        }

        stepContext.values.entities = {
          bookEntities,
          numberEntities,
          dateFrameObj,
        };
      }
      return stepContext.next();
    } catch (error) {
      console.log(error);
    }
  }

  ///-------------------------------END-------------------------------------

  //------------------User input through adaptive Card-----------------------//

  // async showform(stepContext) {
  //   try {
  //     if (
  //       stepContext.context.options &&
  //       stepContext.context.options.formReFill
  //     ) {
  //       return stepContext.next();
  //     } else {
  //       await stepContext.context.sendActivity({
  //         attachments: [CardFactory.adaptiveCard(ShowFormCard())],
  //       });
  //       return Dialog.EndOfTurn;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async preprocessUserInput(stepContext) {
  //   //console.log("Value types ==>",stepContext.context.activity.value);
  //   try {
  //     let dialogData = await this.BookTableStateAccessor.get(
  //       stepContext.context,
  //       {}
  //     );
  //     let userInput = stepContext.options.entites;
  //     // console.log(userInput);
  //     if (stepContext.options && stepContext.options.formReFill) {
  //       userInput = stepContext.options.values;
  //       console.log(userInput);
  //     } else {
  //       userInput = stepContext.context.activity.value;
  //     }
  //     // console.log("booking dialog data==>", dialogData);
  //     dialogData.type = userInput.type;
  //     dialogData.NumberOfPerson = userInput.number;
  //     dialogData.bookingdays = userInput.bookingDate;
  //     dialogData.bookingtime = userInput.bookingtime;

  //     console.log("dialog data time first view ===>", dataDialog.bookingTime);

  //     if (parseInt(dialogData.bookingtype) > 20) {
  //       await stepContext.context.sendActivity(
  //         "Our Maximum no of people booking for table is 20 only."
  //       );
  //       return await stepContext.endDialog();
  //     } else {
  //       await stepContext.context.sendActivity(
  //         "Thank you I have proceed your request for booking a table/restaurant as per the details provide by you."
  //       );
  //       return await stepContext.next();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //------------------END---------------------------------------------

  async askbooking(stepContext) {
    if (stepContext.values.entities.bookEntities) {
      return await stepContext.next();
    } else {
      await stepContext.prompt(ChoicePromptDialog, {
        prompt:
          "Please help me with the booking type and number of persons and date",
        choices: ChoiceFactory.toChoices([
          "Table Booking",
          "Restaurant Booking",
        ]),
      });
      return ComponentDialog.EndOfTurn;
    }
  }

  async askNoOfPerson(stepContext) {
    //  console.log("Second step ===>", stepContext.values.entities);
    let dialogData = await this.BookTableStateAccessor.get(
      stepContext.context,
      {}
    );
    if (stepContext.values.entities.bookEntities) {
      dialogData.type = stepContext.values.entities.bookEntities;
    } else {
      dialogData.type = stepContext.context.activity.text;
    }
    if (
      stepContext.values.entities.numberEntities &&
      stepContext.values.entities.numberEntities
    ) {
      return await stepContext.next();
    } else {
      await stepContext.context.sendActivity(
        "For how many persons you want to book Table for"
      );
      return ComponentDialog.EndOfTurn;
    }
  }

  async askBookingDate(stepContext) {
    //console.log("Inside Thierd step ==>", stepContext.values.entities);
    let dialogData = await this.BookTableStateAccessor.get(
      stepContext.context,
      {}
    );

    if (stepContext.values.entities.numberEntities) {
      dialogData.NumberOfPerson = stepContext.values.entities.numberEntities;
    } else {
      dialogData.NumberOfPerson = stepContext.context.activity.text;
    }
    if (
      stepContext.values.entities.dateFrameObj &&
      stepContext.values.entities.dateFrameObj.date
    ) {
      return await stepContext.next();
    } else {
      await stepContext.context.sendActivity(
        "for which date I should book this table request"
      );
      return ComponentDialog.EndOfTurn;
    }
  }

  async askBookingTime(stepContext) {
    //  console.log("Fourth step ==>",stepContext.values.entities.dateFrameObj);
    let dialogData = await this.BookTableStateAccessor.get(stepContext.context);
    if (
      stepContext.values.entities.dateFrameObj &&
      stepContext.values.entities.dateFrameObj.date
    ) {
      dialogData.bookdate = stepContext.values.entities.dateFrameObj.date;
    } else {
      //adding luis here

      let luisresponse = await this.recognizer.recognize(stepContext.context);
      let luisIntent = luisresponse.luisResult.prediction.topIntent;
      // console.log("date luis ==>", luisIntent);
      if (luisIntent && luisresponse.luisResult.prediction.entities) {
        // console.log("date data check ==>", JSON.stringify(luisresponse.luisResult.prediction.entities));
        dialogData.bookdate =
          luisresponse.luisResult.prediction.entities.datetimeV2[0].values[0].timex;
      }
    }
    if (
      stepContext.values.entities.dateFrameObj &&
      stepContext.values.entities.dateFrameObj.time
    ) {
      return await stepContext.next();
    } else {
      await stepContext.context.sendActivity(
        "for which time you want book you table request"
      );
      return ComponentDialog.EndOfTurn;
    }
  }

  async applyRequest(stepContext) {
    //console.log("last step check ===>",stepContext.values.entities.dateFrameObj);
    let dialogData = await this.BookTableStateAccessor.get(stepContext.context);
    if (
      stepContext.values.entities.dateFrameObj &&
      stepContext.values.entities.dateFrameObj.time
    ) {
      dialogData.booktime = stepContext.values.entities.dateFrameObj.time;

      let time = dialogData.booktime.split(":");
      let hours = parseInt(time[0]);
      let minutes = time[1];
      let finaltime;
      if (hours > 12) {
        finaltime = `${hours - 12} : ${minutes} Pm`;
      } else {
        finaltime = `${hours} : ${minutes} Am`;
      }
      dialogData.booktime = finaltime;
    } else {
      //adding luis here

      let luisresponse = await this.recognizer.recognize(stepContext.context);
      let luisIntent = luisresponse.luisResult.prediction.topIntent;
      // console.log("Intent ==>",luisIntent);
      // console.log("lusisIntent Check ====>",JSON.stringify(luisresponse.luisResult.prediction.entities.datetimeV2[0].values));
      if (luisIntent && luisresponse.luisResult.prediction.entities) {
        // console.log("time data check ==>", JSON.stringify(luisresponse.luisResult.prediction.entities));
        dialogData.booktime =
          luisresponse.luisResult.prediction.entities.datetimeV2[0].values[0].resolution[0].value;
      }
    }

    await stepContext.context.sendActivity({
      attachments: [
        CardFactory.adaptiveCard(
          BookTableCard(
            dialogData.type,
            dialogData.NumberOfPerson,
            dialogData.bookdate,
            dialogData.booktime
          )
        ),
      ],
    });
    return stepContext.endDialog();
  }
}

module.exports.BookTableDialog = BookTableDialog;
