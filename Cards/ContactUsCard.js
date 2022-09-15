module.exports.ContactUsCard = () => {
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
                        "url": "https://c.tenor.com/WHUtiaYJmI8AAAAM/contact-me-call-me.gif",
                        "width": "400px",
                        "height": "207px",
                        "separator": true,
                        "style": "Person",
                        "horizontalAlignment": "Center"
                    }
                ]
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "Contact Us",
                        "wrap": true,
                        "horizontalAlignment": "Center",
                        "style": "heading",
                        "size": "ExtraLarge",
                        "weight": "Bolder",
                        "color": "Accent",
                        "isSubtle": true
                    },
                    {
                        "type": "Container",
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": "Address :- 120, School, 192, opp. Mariumpur, Laxmi Ratan Colony, Lajpat Nagar, Shastri Nagar, Kanpur, Uttar Pradesh 208005",
                                "wrap": true,
                                "horizontalAlignment": "Center",
                                "size": "Medium",
                                "weight": "Bolder"
                            }
                        ],
                        "separator": true
                    },
                    {
                        "type": "Container",
                        "items": [
                            {
                                "type": "TextBlock",
                                "wrap": true,
                                "size": "Medium",
                                "horizontalAlignment": "Center",
                                "weight": "Bolder",
                                "text": "0512-3209403,0512-224562"
                            }
                        ],
                        "verticalContentAlignment": "Center",
                        "separator": true
                    }
                ],
                "style": "emphasis"
            },
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
                                        "url": "https://toppng.com/uploads/preview/facebook-circle-icon-png-image-transparent-library-facebook-icon-png-blue-11562909379nxtpnfvx2u.png",
                                        "size": "Stretch",
                                        "width": "22px",
                                        "height": "23px",
                                        "horizontalAlignment": "Center",
                                        "selectAction": {
                                            "type": "Action.OpenUrl",
                                            "url": "www.facebook.com"
                                        },
                                        "separator": true
                                    }
                                ],
                                "backgroundImage": {
                                    "verticalAlignment": "Center"
                                },
                                "verticalContentAlignment": "Center"
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "Image",
                                        "size": "Stretch",
                                        "width": "22px",
                                        "height": "21px",
                                        "horizontalAlignment": "Center",
                                        "selectAction": {
                                            "type": "Action.OpenUrl",
                                            "url": "www.google.com"
                                        },
                                        "url": "https://www.freeiconspng.com/thumbs/website-icon/website-icon-8.png",
                                        "separator": true
                                    }
                                ],
                                "backgroundImage": {
                                    "verticalAlignment": "Center"
                                },
                                "verticalContentAlignment": "Center"
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "Image",
                                        "size": "Stretch",
                                        "width": "22px",
                                        "height": "20px",
                                        "horizontalAlignment": "Center",
                                        "selectAction": {
                                            "type": "Action.OpenUrl",
                                            "url": "www.facebook.com"
                                        },
                                        "url": "https://image.similarpng.com/very-thumbnail/2020/06/Instagram-logo-transparent-PNG.png",
                                        "separator": true
                                    }
                                ],
                                "backgroundImage": {
                                    "verticalAlignment": "Center"
                                },
                                "verticalContentAlignment": "Center"
                            }
                        ]
                    }
                ]
            }
        ]
    } 
    return card;
}