const express = require('express');
require("dotenv").config();
const app = express();

const PORT = process.env.PORT ;


const {BotFrameworkAdapter,ConversationState,MemoryStorage} = require('botbuilder');

const {BotActivityHandler} =require('./BotActivityHandler')
const  {RootDialog} = require('./Dialogs/RootDialog')
//adaptor

const adaptor = new BotFrameworkAdapter({
    appId: "",
    appPassword: "",
})


//adaptor error handler

adaptor.onTurnError = async(context,error) => {
    console.log("Error Occured =>", error);


    //send message to user about error
    await context.sendActivity("BOT Encountered an error");
}


//create Server

app.listen(PORT,(req,res) =>{
    console.log(`server is running http://localhost:${PORT}`);
})

//memory storage

const memory = new MemoryStorage();

let conversationState = new ConversationState(memory);

//activity handler object
const rootDialog = new RootDialog(conversationState);
const mainBot = new BotActivityHandler(conversationState, rootDialog);

app.post('/api/message', (req,res) => {
    adaptor.processActivity(req,res,async(context) => {
        await mainBot.run(context)
    })
})









