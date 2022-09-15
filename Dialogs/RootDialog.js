const {
  ComponentDialog,
  DialogSet,
  DialogTurnStatus,
  WaterfallDialog,
} = require("botbuilder-dialogs");
const {LuisRecognizer} = require('botbuilder-ai')

//Dialogs
const { dialog } = require("../constants/DialogIds");

//constants
const {
  HelpDialog,
  GallaryDialog,
  ContactDialog,
  BookTableDialog,
} = require("./index");

//luis configuration
const luisConfig = {
  applicationId: '568d9605-2fe8-4d46-b530-5dd53803cc0e',
  endpointKey: '8181e9a3208541eab8d205ac6e18f1d1',
  endpoint: 'https://restaurantbookingstatus.cognitiveservices.azure.com/',
}

class RootDialog extends ComponentDialog {
  constructor(conversationState) {
    super(dialog.ROOT_DIALOG);
    if (!conversationState) throw new Error("ConversationState required");

    this.conversationState = conversationState;
    this.accessor = this.conversationState.createProperty("DialogAccessor");

    this.addDialog(
      new WaterfallDialog(dialog.ROOT_DIALOG_WF1, [
        this.routeMessage.bind(this),
      ])
    );
    this.recognizer = new LuisRecognizer(luisConfig,{
      apiVersion: 'v3'
    });
    this.addDialog(new BookTableDialog(conversationState));
    this.addDialog(new HelpDialog(conversationState));
    this.addDialog(new GallaryDialog(conversationState));
    this.addDialog(new ContactDialog(conversationState));
    this.initialDialogId = dialog.ROOT_DIALOG_WF1;
  }

  async run(context, accessor) {
    try {
      const dialogSet = new DialogSet(accessor);
      dialogSet.add(this);
      const dialogContext = await dialogSet.createContext(context);
      const results = await dialogContext.continueDialog();
      if (results && results.status === DialogTurnStatus.empty) {
        await dialogContext.beginDialog(this.id);
      } else {
        console.log("dialog stack is empty  ");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async routeMessage(stepContext) {   
    if (stepContext.context.activity.value && stepContext.context.activity.value.actiontype) {
      switch(stepContext.context.activity.value.actiontype){
        case 'bookTableAction':
          let formvalue = stepContext.context.activity.value;
           delete stepContext.context.activity.value;
          return await stepContext.beginDialog(dialog.BOOKTABLE_DIALOG, {
            formReFill: true,
            value : formvalue
          })
      }

    } else {
      let luisresponse = await this.recognizer.recognize(stepContext.context);
      let luisIntent = luisresponse.luisResult.prediction.topIntent;
      //console.log(luisIntent);
      //console.log(JSON.stringify(luisresponse.luisResult.prediction.entities));
      switch (luisIntent) {
        case "applyrequest":
          return await stepContext.beginDialog(dialog.BOOKTABLE_DIALOG,{
            luisResult : true,
            entities : luisresponse.luisResult.prediction.entities,
          });
          break;
        case "showgallery":
          return await stepContext.beginDialog(dialog.GAllERY_DIALOG,{
            luisResult : true,
            entities : luisresponse.luisResult.prediction.entities,
          });
          break;
        case "contactdetails":
          return await stepContext.beginDialog(dialog.CONTACTUS_DIALOG,{
            luisResult: true,
            entities : luisresponse.luisResult.prediction.entities,
          });
          break;
        case "help":
          return await stepContext.beginDialog(dialog.HELP_DIALOG);
          break;
        default:
          await stepContext.context.sendActivity(
            "Soory i am still learning can you please refresh your query"
          );
      }
    }

    return await stepContext.endDialog();
  }
}

module.exports.RootDialog = RootDialog;
