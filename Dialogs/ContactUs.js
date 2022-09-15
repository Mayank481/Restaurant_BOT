const { ComponentDialog, WaterfallDialog } = require("botbuilder-dialogs");
const { CardFactory } = require("botbuilder");
const { dialog } = require("../constants/DialogIds");
const {ContactUsCard} = require('../Cards/index')


class ContactDialog extends ComponentDialog {
    constructor(conversationState) {
      super(dialog.CONTACTUS_DIALOG);
  
      if (!conversationState) throw new Error("conversationState state required");
  
      this.conversationState = conversationState;
  
      this.addDialog(
        new WaterfallDialog(dialog.CONTACTUS_DIALOG_WF1, [
          this.showContact.bind(this),
        ])
      );
  
      this.initialDialogId = dialog.CONTACTUS_DIALOG_WF1;
    }
  
    async showContact(stepContext) {
      await stepContext.context.sendActivity(
        'This is our address and some important number for your quires Thank you!'
      );
      await stepContext.context.sendActivity({
        attachments: [
          CardFactory.adaptiveCard(ContactUsCard())
        ],
      });
      return await stepContext.endDialog();
    }
  }

  module.exports.ContactDialog = ContactDialog;