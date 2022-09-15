const { ComponentDialog, WaterfallDialog } = require("botbuilder-dialogs");
const { CardFactory, MessageFactory } = require("botbuilder");
const { dialog } = require("../constants/DialogIds");
const {GalleryCard} = require('../Cards/GalleryCard')
// const {ImageCard} = require('../Cards/ImageCard')

class GallaryDialog extends ComponentDialog {
    constructor(conversationState) {
      super(dialog.GAllERY_DIALOG);
  
      if (!conversationState) throw new Error("conversationState state required");
  
      this.conversationState = conversationState;
  
      this.addDialog(
        new WaterfallDialog(dialog.GAllERY_DIALOG_WF1, [
          this.showGallery.bind(this),
        ])
      );
  
      this.initialDialogId = dialog.GAllERY_DIALOG_WF1;
    }
  
    async showGallery(stepContext) {
      await stepContext.context.sendActivity(
        'Here you can watch some beautyfull picture of our restaurant.'
      );
      // let images = [
      //   "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
      //   "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaOfpv6sYOECRzFE0W5AmNJGoUHI-gjnf0rbz4zEKS_Pb4T8fsFnkYDOY46JOG_ZtKQ4&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaOfpv6sYOECRzFE0W5AmNJGoUHI-gjnf0rbz4zEKS_Pb4T8fsFnkYDOY46JOG_ZtKQ4&usqp=CAU"
      // ]
      
      
      
      // let cardArray = [];
      //       for (let i = 0; i < images.length; i++) {
      //         cardArray.push(ImageCard[i]);
      //       }
      //       let carouselArray = [];
      //       for (let i = 0; i < cardArray.length; i++) {
      //         carouselArray.push(CardFactory.adaptiveCard(cardArray[i]));
      //       }
      //       await stepContext.context.sendActivity(
      //         MessageFactory.carousel(carouselArray)
      //       );
      await stepContext.context.sendActivity({
        attachments: [
          CardFactory.adaptiveCard(GalleryCard())
        ],
      });
      return await stepContext.endDialog();
    }
  }

  module.exports.GallaryDialog = GallaryDialog;