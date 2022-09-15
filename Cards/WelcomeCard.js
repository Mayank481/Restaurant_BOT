module.exports.WelcomCard = () =>{
    let card = {
        "type": "AdaptiveCard",
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.3",
        "body": [
            {
                "type": "Container",
                "items": [
                    {
                        "type": "Image",
                        "url": "https://cdn.dribbble.com/users/77598/screenshots/16399264/media/d86ceb1ad552398787fb76f343080aa6.gif",
                        "separator": true
                    }
                ],
                "separator": true
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "Welcome ! I am your personal assistance to providing a best services and information about our restaurant. This is a family restaurant we are happy to serve our best service to your family. How can i help you :) ",
                        "spacing": "Medium",
                        "horizontalAlignment": "Left",
                        "wrap": true,
                        "style": "default",
                        "fontType": "Monospace",
                        "size": "Default",
                        "weight": "Bolder",
                        "color": "Good",
                        "separator": true
                    }
                ],
                "separator": true
            }
        ]
    }
    return card;
}