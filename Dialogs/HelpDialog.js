const { ComponentDialog, WaterfallDialog } = require("botbuilder-dialogs");
const { CardFactory } = require("botbuilder");
const { dialog } = require("../constants/DialogIds");

class HelpDialog extends ComponentDialog {
  constructor(conversationState) {
    super(dialog.HELP_DIALOG);

    if (!conversationState) throw new Error("conversationState state required");

    this.conversationState = conversationState;

    this.addDialog(
      new WaterfallDialog(dialog.HELP_DIALOG_WF1, [
        this.sendHelpSuggesstions.bind(this),
      ])
    );

    this.initialDialogId = dialog.HELP_DIALOG_WF1;
  }

  async sendHelpSuggesstions(stepContext) {
    await stepContext.context.sendActivity(
      'I can help you with your Booking status, Click on "Book Table" button for booking a tale'
    );
    await stepContext.context.sendActivity({
        attachments: [
          CardFactory.heroCard(
            "here are some suggestion that you can try :- ",
            null,
            CardFactory.actions([
              {
                type: "imBack",
                title: "Book Table",
                value: "Book a Table",
              },
              {
                type: "imBack",
                title: "Gallery",
                value: "Gallery",
              },
              {
                type: "imBack",
                title: "Contact Us",
                value: "Contact Us",
              },
              {
                type: "imBack",
                title: "Help",
                value: "Help",
              },
            ])
          ),
        ],
      });
    return await stepContext.endDialog();
  }
}


module.exports.HelpDialog = HelpDialog;