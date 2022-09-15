module.exports.BookTableCard = (bookingtype,noOfPeople,bookingdate,bookingtime) => {
    let card = {
        "type": "AdaptiveCard",
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.3",
        "body": [
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
                                        "url": "https://c.tenor.com/fjjQO4nQvOkAAAAC/sanluisec-restaurant.gif",
                                        "separator": true,
                                        "size": "Medium",
                                        "horizontalAlignment": "Left"
                                    }
                                ],
                                "separator": true,
                                "style": "emphasis",
                                "horizontalAlignment": "Left"
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "wrap": true,
                                        "text": "RESTAURANT BOOKING",
                                        "separator": true,
                                        "horizontalAlignment": "Left",
                                        "style": "columnHeader",
                                        "fontType": "Monospace",
                                        "size": "Medium",
                                        "weight": "Bolder",
                                        "color": "Accent"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center"
                            }
                        ]
                    }
                ],
                "separator": true,
                "style": "emphasis"
            },
            {
                "type": "Container",
                "separator": true,
                "items": [
                    {
                        "type": "ColumnSet",
                        "columns": [
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "wrap": true,
                                        "text": "Type of Book",
                                        "weight": "Bolder",
                                        "fontType": "Monospace",
                                        "size": "Default",
                                        "separator": true,
                                        "horizontalAlignment": "Center"
                                    }
                                ],
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "wrap": true,
                                        "text": `${bookingtype}`,
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Center",
                                        "separator": true
                                    }
                                ],
                                "separator": true
                            }
                        ],
                        "separator": true
                    }
                ],
                "style": "emphasis"
            },
            {
                "type": "Container",
                "separator": true,
                "items": [
                    {
                        "type": "ColumnSet",
                        "columns": [
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "wrap": true,
                                        "weight": "Bolder",
                                        "fontType": "Monospace",
                                        "size": "Default",
                                        "separator": true,
                                        "horizontalAlignment": "Center",
                                        "text": "Number of Person"
                                    }
                                ],
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "wrap": true,
                                        "text": `${noOfPeople}`,
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Center",
                                        "separator": true
                                    }
                                ],
                                "separator": true
                            }
                        ],
                        "separator": true
                    }
                ],
                "style": "emphasis"
            },
            {
                "type": "Container",
                "separator": true,
                "items": [
                    {
                        "type": "ColumnSet",
                        "columns": [
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "wrap": true,
                                        "weight": "Bolder",
                                        "fontType": "Monospace",
                                        "size": "Default",
                                        "separator": true,
                                        "horizontalAlignment": "Center",
                                        "text": "Booking Date"
                                    }
                                ],
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "wrap": true,
                                        "text": `${bookingdate}`,
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Center",
                                        "separator": true
                                    }
                                ],
                                "separator": true
                            }
                        ],
                        "separator": true
                    }
                ],
                "style": "emphasis"
            },
            {
                "type": "Container",
                "separator": true,
                "items": [
                    {
                        "type": "ColumnSet",
                        "columns": [
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "wrap": true,
                                        "weight": "Bolder",
                                        "fontType": "Monospace",
                                        "size": "Default",
                                        "separator": true,
                                        "horizontalAlignment": "Center",
                                        "text": "Booking Time"
                                    }
                                ],
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "wrap": true,
                                        "text": `${bookingtime}`,
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Center",
                                        "separator": true
                                    }
                                ],
                                "separator": true
                            }
                        ],
                        "separator": true
                    }
                ],
                "style": "emphasis"
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "I have booked your table/restaurant as per the scheduled date and time.\n              Enjoy your days with us!",
                        "wrap": true,
                        "separator": true,
                        "horizontalAlignment": "Left",
                        "style": "default",
                        "fontType": "Monospace",
                        "size": "Default",
                        "weight": "Bolder",
                        "color": "Good"
                    }
                ],
                "separator": true,
                "style": "emphasis"
            }
        ]
    }
    return card;
}