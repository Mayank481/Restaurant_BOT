module.exports.ShowFormCard = () => {
    let card = {
        "type": "AdaptiveCard",
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.3",
        "body": [
            {
                "type": "Container",
                "items": [
                    {
                        "type": "Container",
                        "items": [
                            {
                                "type": "ColumnSet",
                                "columns": [
                                    {
                                        "type": "Column",
                                        "width": "stretch",
                                        "items": [
                                            {
                                                "type": "Image",
                                                "url": "https://celebaltech.com/hs-fs/hubfs/MicrosoftTeams-image%20(4)-1.png?width=489&name=MicrosoftTeams-image%20(4)-1.png",
                                                "separator": true,
                                                "horizontalAlignment": "Left",
                                                "size": "Medium"
                                            }
                                        ],
                                        "horizontalAlignment": "Left",
                                        "style": "default",
                                        "backgroundImage": {
                                            "verticalAlignment": "Center"
                                        },
                                        "separator": true
                                    },
                                    {
                                        "type": "Column",
                                        "width": "stretch",
                                        "items": [
                                            {
                                                "type": "TextBlock",
                                                "wrap": true,
                                                "style": "default",
                                                "fontType": "Monospace",
                                                "size": "Medium",
                                                "weight": "Bolder",
                                                "color": "Good",
                                                "horizontalAlignment": "Center",
                                                "text": "Restaurant Booking",
                                                "separator": true
                                            }
                                        ],
                                        "horizontalAlignment": "Center",
                                        "verticalContentAlignment": "Center",
                                        "separator": true,
                                        "style": "default"
                                    }
                                ],
                                "separator": true
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "Image",
                        "url": "https://i.gifer.com/origin/32/32e575a7ac64b48e96c7d871448cc23f_w200.gif",
                        "horizontalAlignment": "Center",
                        "width": "450px",
                        "height": "200px",
                        "separator": true
                    }
                ],
                "style": "default"
            },
            {
                "type": "TextBlock",
                "wrap": true,
                "separator": true,
                "style": "default",
                "fontType": "Monospace",
                "size": "Default",
                "weight": "Bolder",
                "color": "Attention",
                "isSubtle": true,
                "text": "Please select the type of Restaurant Booking. "
            },
            {
                "type": "Input.ChoiceSet",
                "choices": [
                    {
                        "title": "Table Booking",
                        "value": "Book a Table"
                    },
                    {
                        "title": "Restaurant Booking",
                        "value": "Book a Restaurant "
                    }
                ],
                "separator": true,
                "id": "bookingtype",
                "placeholder": "-----Select---- ",
                "isRequired": true,
                "label": "required",
                "errorMessage": "Please fill the details."
            },
            {
                "type": "TextBlock",
                "wrap": true,
                "separator": true,
                "text": "Please enter the number of People.",
                "style": "default",
                "fontType": "Monospace",
                "size": "Default",
                "weight": "Bolder",
                "color": "Attention",
                "isSubtle": true
            },
            {
                "type": "Input.Number",
                "id": "noPerson",
                "placeholder": "Enter the number of People",
                "min": 0,
                "max": 100,
                "separator": true,
                "isRequired": true,
                "label": "required",
                "errorMessage": "Please fill the details."
            },
            {
                "type": "TextBlock",
                "wrap": true,
                "separator": true,
                "text": "Please select the date when booking a restaurant.",
                "style": "default",
                "fontType": "Monospace",
                "size": "Default",
                "weight": "Bolder",
                "color": "Attention",
                "isSubtle": true
            },
            {
                "type": "Input.Date",
                "separator": true,
                "isRequired": true,
                "id": "bookingDate",
                "label": "required",
                "errorMessage": "Please fill the date."
            },
            {
                "type": "TextBlock",
                "wrap": true,
                "separator": true,
                "text": "Please provide your time for booking the table/restaurant.",
                "style": "default",
                "fontType": "Monospace",
                "color": "Attention",
                "size": "Default",
                "weight": "Bolder"
            },
            {
                "type": "Input.Time",
                "id": "bookingTime",
                "value": "00:00",
                "separator": true,
                "isRequired": true,
                "min": "10:00",
                "max": "22:00",
                "errorMessage": "We are working between 10 AM to 10 PM.",
                "label": "required"
            },            
        ],
        "actions": [
            {
                "type": "Action.Submit",
                "style": "positive",
                "id": "bookTable",
                "title": "Booked",
                "data" :{
                    "actiontype" : "bookTableAction"
                }
            },
            {
                "type": "Action.Submit",
                "title": "Cencel",
                "id": "cencelBooking",
                "style": "destructive"
            }
        ],
    }
    return card;
}