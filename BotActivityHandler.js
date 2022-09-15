const { ActivityHandler, CardFactory } = require("botbuilder");
const { WelcomeCard } = require("./Cards/index");

class BotActivityHandler extends ActivityHandler {
  constructor(conversationState, rootDialog ) {
    super();
    if (!conversationState) throw new Error("conversationState required");

    this.conversationState = conversationState;
    this.rootDialog = rootDialog;
    this.accessor = this.conversationState.createProperty('DialogAccessor');

    //Message event

    this.onMessage(async (context, next) => {

      await this.rootDialog.run(context, this.accessor)   
      await next();
    });
    this.onMembersAdded(async (context, next) => {
      if (
        context.activity.membersAdded &&
        context.activity.membersAdded[1].id == context.activity.from.id
      ) {
        await context.sendActivity({
          attachments: [CardFactory.adaptiveCard(WelcomeCard())],
        });

        await context.sendActivity({
          attachments: [
            CardFactory.heroCard(
              "here are some suggestion that you can try :- ",
              null,
              CardFactory.actions([
                {
                  type: "imBack",
                  title: "Book Table",
                  value: "Book Table",
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
      }
      await next();
    });
  }

  async run(context) {
    await super.run(context);
    await this.conversationState.saveChanges(context, false);
  }
}

module.exports.BotActivityHandler = BotActivityHandler;
