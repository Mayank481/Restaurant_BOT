module.exports.GalleryCard = () => {
    let card = {
        "type": "AdaptiveCard",
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.3",
        "body": [
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "wrap": true,
                        "text": "GALLERY VIEW",
                        "separator": true,
                        "style": "heading",
                        "horizontalAlignment": "Center",
                        "fontType": "Monospace",
                        "size": "ExtraLarge",
                        "weight": "Bolder",
                        "color": "Accent"
                    }
                ]
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "ImageSet",
                        "images": [
                            {
                                "type": "Image",
                                "size": "Small",
                                "separator": true,
                                "url": "https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg",
                                "altText": "pic",
                                "spacing": "Medium",
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "Image",
                                "size": "Small",
                                "separator": true,
                                "url": "https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg",
                                "altText": "pic",
                                "horizontalAlignment": "Left"
                            },
                            {
                                "type": "Image",
                                "size": "Small",
                                "separator": true,
                                "url": "https://cdn.downtoearth.org.in/library/large/2019-05-31/0.68487000_1559290735_70-20190615-dte-english.jpg"
                            },
                            {
                                "type": "Image",
                                "size": "Small",
                                "separator": true,
                                "url": "https://media.istockphoto.com/photos/happy-waiter-serving-food-to-group-of-friends-in-a-pub-picture-id1307190527?k=20&m=1307190527&s=612x612&w=0&h=ByZuYsSsGV81QqZgrUOQBcITbpChU_kD_xUeAVoGzdU="
                            },
                            {
                                "type": "Image",
                                "size": "Small",
                                "url": "https://www.fsrmagazine.com/sites/default/files/styles/story_image_720x430/public/2022-01/waiter.jpg?itok=o1duVSb5",
                                "separator": true,
                                "horizontalAlignment": "Center",
                                "altText": "pic"
                            }
                        ],
                        "spacing": "Medium",
                        "separator": true,
                        "horizontalAlignment": "Center",
                        "imageSize": "Small"
                    },
                    {
                        "type": "ImageSet",
                        "images": [
                            {
                                "type": "Image",
                                "size": "Small",
                                "url": "https://assets.cntraveller.in/photos/614071700adc3d1e95c7adbd/master/pass/outdoor-dining-pune-daily-all-day.jpg",
                                "altText": "pic",
                                "separator": true,
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "Image",
                                "size": "Small",
                                "separator": true,
                                "url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUXGBcZGhocGhoaGxogIBkaGiAcIRwgHBocISwjGiAoIBocJDUkKC0vMjIyGSI4PTgwPCwxMi8BCwsLDw4PHRERHTEoIigxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBgMFAAIHAQj/xABMEAACAQIDBAYGBwQIBAYDAQABAgMAEQQSIQUxQVEGEyJhcZEygaGxwdEHFCNCUmLwM3Ky4RVDgpKiwtLxU2NzoxckNERU04OUsxb/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAlEQACAgEEAwADAQEBAAAAAAAAAQIRIQMSMUETUWEiMnEUkQT/2gAMAwEAAhEDEQA/AFroaMGk3/nFJQr2XsSEcbroAbg87EggcCa6EW2O3/u41v8AjZV/iVa4u+JY7tBXkUDNuF+87vOpKVcl/wCHV8X0Vw2IN8PtTCqOCosbW9ayg38fKhP/AAuxB1TFwy95Dj2jPSHBs5d76924edStjoo9EUEjdlAFv7XyvW3rpB2vlsd0+jTF/feK3JGJJ9bqLVDP9HOIXUI5tyaM+y9JTdIcTuSaWMfkkdT5g3ovB9KdoLYJjJz+9IW/jvRtVkGeiwxWwsbH/wCyxBHPqy3size+gMZhZxG3WRSpYE2aN0Fxu0IGtMmC6VbRQZpMYWHIxw29bFL+6t8b9IszI0bGOQNpoh56G4YDeL8aW49DNSrJS4PAKqrkXTIQQc1jcL6QBBJ1B15DkKFXAlc6tcgqNQN5BuBa4y7t5vVxtDpo8zfawR/ZX7SEqzqDkCsWDaXYNu0I7zQMe1hICTEwA1uDcbwN5Ci+vsqTuPGTIqYEOYaAajfp50ZiN51Frmi1xcLaZrdxVvlXjPF+NKCn8GyCY6XPFAo1KI9yCD6cjsNxuLd9vaK3l7QQDLogVtCCzXZixJGpGYLxFkFqIQxEgdYi34sbDlvtVzs/Y+HkVs+Pw0RBsvaVgwsDmBZk0uSvipopylwhWl2K2FwQUkBTpa9ze5F9f5US1wNw91OGA6Gs6gpi4DmVGN94JBupAY6j1XvRh+jViLtLnPcco9Qt8apsbyGM0lSOdSS82rEVj6KnxOlOOM6CYhCeqgdu/PDbyzZjQzdG8TGNcLMT+Vc38N6Dg/Q25Pso8Ns4sLs4Uch8zWs8ES+icx5k3/lVvJ0fxjf1BjHOS49lrjyqvxmx2jNpJEzfhDKD5E3PlQcWuQ36B1xWXcAP1yFRyY5n4lvAfKiIMGg1OX1m/s3V7LOPRUFu4Clr4H+sCIfkB4/yqQYf8T+WleP1n4CPHT2GpEwTsLlrDuomPSkS7h56++tXxg4VI+GiTeSx7z8rVAZ0Buq+VajWbrJK+iq3uHnUibHkb03VB5+7T21p9Ykb0Rb2e01r9Xdz25AvifnWMErgcLE6O8xcqyt2d3ZIO5cx4br12nDYhJFWSNg6MLqym4IPEGuFthoF9KRmP5d3x99WfR7pWcE2WNGeJmu8d+e9kuTZvIHjwIaDJzjZ2gGvQaD2dj4541kja6t3EEHkynVT3GiwaoRNr1leXrKxj5tKqo13/rhXjY8gWVfWfkKjEBsSamyRoO0bnlv9nzpcFMg15JDxbu4D4Ci4dlne7BRyGp89w9tRPtAjRQAO/wCVeDDyyakMR+bQeR+ArO/4ZV/QsvBHu7Teft3CgmxJvmGlStgwn7RwO4fq58qhSRVa4F7c6Coa2Tph5ZdbM3edB6r6eVGpsrJYySKvh82+VQDaE0noXt+Qf5ju8xWv1KQnNIwXvY3Py9tK7MqD0xUEebKpcnebX4g7203jgOVazbWLhxovZGUbyTmX4X4UOi4dPSLSdw0Hst763baqgFY4lXwFz7B86FfBrBUQsbAHXnpVguzsv7SQL3D4E/Kq5HcnTQ9+nuotcMg/aSjwQfHX3VmFBMyxjJYZuzoW/ebn391ZiMUrWyi+h0XW2p08rVGuIw6boy5/OfhqPZRqyzOpyQlVVOsOmUZLgZtdCLkbqXIVQP8AV3ckiMAEk3a3Hu1qRIDHlYy5MxIIS4IAtrddePLhWs0cmRGZlVJM1he5OQ2a4qCN48vbdiAL/PStlGtcFzDtWRBdMXODc75ZbFSNOzm37+HKiE6X4xfQxEreIDfxA1UyjIzqYiGjYo9xfK4JGUnUX7LcdcptXhlkI0AUd5rbpB2pjRg+l21D/WR2HGRE/wAiiipOnmKQWc4WTu6t/eJCPZSYiof2kwFuCgtfy3eVRTNCPQEjnjmPutr7KZTl7F2R9DfL08ib9pgMNIfAD3o1FYXpvhSLf0aVH/LZbfwqKRUZ/uRgeI+JtUziT78yL3X18h86ZakgbEP2G2js/FSLH9XxcbOwUdsBbtpuEpHso/bfQvCxQySmWdVRS1s6EEjcNUvqbD10p/RxgY5McjCRnMaPJ6JA3ZBe/fICPCm/6T8eVgjgVcxlbMw4ZI7EX8XKn+yaon+LbEf7JI5mZIRujLHvP691QO7E9lMvda3vqYtIB6SIPV/Oh5QlrtKWOugB05anQ3qBY3aKS/bdU8Tb2VG0cY9KQsfyj4mpIY1JskLuSezcn4aGjY45d4jhisLXbKPWd9z30LNQCiK37OF27zc+64qaNJvurHGOZsPn7qmYEXEmKtvv1YJva/EWH+9DLFEdwlkPs9mtazUWeyNqSYaQSHGKRueIKWVxyOXcRwa2nhcHp2wtuw4uPPE17aOh0ZD3jkeB3Hzrk6RsBdMMgHOTX+Iip4sbPEwdcRFERwQA+ogKbjTcadSonKFnZb1lIUH0ioFAkjDOB2mVnUE8wpBy+FzWU+5E9jKPCSRIuXqEF/vJo3m17+GlUUmwM0hKuhDMSMxKEAn72hHkTVlevQ9JbHpEWJ2I0MTSJ1blR9ztAf2t/upakxMkht1lr8Abe7U02JJY3BsaKw+PdDcNqd5IBv6yDW3I21iQdnqn7VmB35QpB8z8qFDBXuFvroDrenbaGGjnbPICGsBdDl0FzuII4ncK9wmycGvpRyM34mkv/hAVfZR3IG1i2kmIk3AIvPRffdvKtTg4hrLiQTxCAsb/AL3zFWWK6PFmOWRApJ9IMCoJ0sFDA28RROF6JQj058x5BCPa2a/kKGPYclKk2GBtHFJK35j5nKt/dUz/AFhl0jWJLcbLp4E39lTYjZOJUkRjs3OW0kY7N9PvDh4V7F0XnkN5JI18XzEeVx7a1IxSILkZmsL621owNADZVkkPed/qX5UTjujssb5Y160WBzCwF+VixqbDbLxzaKvVr+9GoHqvfyosxCiTWvHCI+8gLbxzW91XO0XR5Qkcklm6+AKwJyBHumptm7LWPKw9YeL6LTrG0kj9aRa0aMzs1yByvpe+l91AwbGmksXup7XZYMDdtC1tN4UG/HQ1lS5BJvohTEK0aAgkr1nLXNlO7hvtXiwNljYBQJXdBrdgV6u91/8AyC3E2PrKw2x3UZWG4ncdNbb7rf2VjYNlFshF95z2tyIIXfvobogtlomMDLMxk1llncRsNy9ROEa/GTPOFygk5kuL1RB0PF3Pd+r1ZRbOmlIEKMyi2nZABsFvc2BJOXyoDFRPG5ikdg66FVA0PiDWY0H7CcKrWOWBD+aQ6D1EisxeIfTNLEB+GOxt42HxofDwg3PVF+95Mo+HvraV7W/YJ+4Mx9e+/nQoeyJSpO+R/Af70ckZHo4dR3yv8CRQhLEjtSHwXL5Xr0ooOqj+3KPctYx1T6KsM3VzSsY7FljURgWGUZm1trfOvlSz042gk+Mks0jCP7IBN10JzevOW8hTr0bkGD2QkpC36tpbKDZmkJMYsdSTmQVyl5XJuzSseJLKlzzvwqs3UUhIZk2TLhuIg9cjWHkSK8uRftxJzC6+4H31ASg1IiB/M7uf8OhojEwAQiVXscshZQgX0JIkGQnXXrQbH8DHlXPTZW0jZSul5JX7kW3tN/dU+GSK5BhJtqDLLl05kC19bi1RJiDJLPGpH20gEYJyrZpAVAP3FAOg5W31C75o4pQUsoMNiGJupZtBbVbONfGjsF3hxmRTp9XT9xS587GtXmZvvyt+6gUe/wCFb4Gfq2ljkJOrjWMKCUSZBlPBs7pbXfl32oC1z2j63lX2ga0NtBUkwgwjeYx4yTAewWNa51W4zQLyyoznzItWkRXgIv7KSyH/ABaUQOsANutA7oo4h5k3ohB+vb/iP6olrK9u35//ANiP5VlEx7t9jGjlL3AJB5UnjbM/47/2V+ArpG2yBhcRpqY391KexMXFGqlBZ1N2kjA69DY5x1TMY54tBa1rC9xxqsezmkymG1MR37yPR4jf5VL/AEriAbWW9r7tw77HSr6PFRhWkDIAQzdZDGXQk2zfWYXa8LPYDMlgCezotV2KwqDMFUBX7SojZk7IAzwSlrysCTeNrNuBJIuDS9A3MDTpDJxVT5ipR0lf8K/3j8qDxIRi7HUm7AqQL77ML3svNDZhoRoLCvA9VHavQd7GFek7fgH97+VSDpSfwD+8PlS27jcB6zv1AuOVt5HHWpFn3Cw0N1te69q/YN9eVmv8a3jibyMYl6Wf8s+YqVelg/A/s+dLEkoc5iouLkkA2Y3v2lvZf7NhXk7LvC5bk6Akrb8pYlh6yaHjiHySHCLpSp+7IP7PyJo2PbwIuA1v3TXPdK18qHjQd7OkDb6DeSPEEfCiI9ro24jh7K5jp+v17axWI3E+o/Kt40bezqy4wHgD5VKkyngvkP1xrl4xEi2yu9/3j8asNmbZlEiq7FlJ1uNQDxFvVS+IbcdHGJbS3Cw32sBqKJSVjYk3PqOvrpaw+1hyY+Xzq8hkzKrcwD5i9I1RrTL7AYGPFqwnQSZCMt9LXvfda+4b+VV/SHo1CnV9Weq0awA0JFra3BHjr4Vc9FBpL4p/mqq+kqV1SAIbZjJfUjQBOIF/KqJfiJb3HP5cOt9QSb63JIB9Z19VQuhUkbvBY18ixqGXEtcC6+Vz/ia/sFSLEd+U68kHvEb++hRWxtx3Tnr4RBLh4zGMukc7KTk9EXWN9Nx9QqtmlwLDSHFRnuCSD/uFL0HFs2dx2Y5W8M59mZPdUn9AyD0lSP8A6pVD5uWotsCSQYIMHl0xjI3JownmIhIap8VhZGORJ4WjbXP1jkWbKSoDorb40J7I1A11o+PAqNGmiXf6Mity4R5T/tW74OE+liAw5Kk19SDvYEHdzoBavsDh2A5PZkvfUBD6J0NxqddN9FDYEkQ7WcKODXsQdddBzrIoMKpuGluNdUiF/WXBo1NqwwICrTo6vcWnKkiy5bqLqy3B08eeiq2+RXFIqsRDeTPdhYDMMpN7G5321PjwoxEVdQwHgsKe3MxovD9LrBAArjrRcSM79k5L2OTQ3vfeNd1eDbrxmIMkSABrqsai982gNzcBSOe40XG+zRkogoufvO3cXcjyRBUZiUfdUd5Un/8ApJ8KkZl5j134/vo3voiDD3F1HrGXh+4VPCkKgOVfyeWHrKsvqzfib/u/669oWYL2nh1bCYoneIZCPG1MGB6GbMeNCY0DFFJ0TkLnVeZpX2vIRhsQBxjf+E1WnaGKKi2HxABhVAQwX7ytca8Qts2/hxquTno6A30fbPO5E/up8BUR+jrBjUKgI3dnd5GlXDdIMQkgcwYkgPM1syEWlyZRa+5cp0vpfjVi3TKT/wCLiP8At/66V7vYUgjG/RfhmAyyiKxzaBzrzsZLA6DW3AVy/C7EVto/Uw/Y+sNFn5hWZb2B0vl58d9P2I6XyEf+nnHqT/XXP8HjSuPE2VievZ8gtmuWJtYm2bXnTQcs2Zo6Yn0QQf8AHH91/wD7KyX6K8JHcPOB2Xc9iT0Y7ZjpLwzDzrWPpi//AMbE+Sf66A2ptaadiwws/wCxli1Ee+QaffOlZSl2Bx9FsPoowpbKJgWUKfRfQNfL/W/lNQ4z6JYlVmWdQbEklX/+yotnbdlikkkOExHbjiTQR3+yXKb9vdyrzaXS+Qow+rzjQ7+r5dzmi5Poyict2NhRJiYYr6SSxoSRwdlU7u412IfRTALWZdN183Hxvf11xrZEuWeFxrlkjYAbzlZTYd5tXUcX0nmcWEU69pDoF+66sRvO8Lb18N9GVgr0GTfRUgHZyG19zm+vim/vvpwpS6W9CBhcO0uq2kRdWB9IHcAByq8wHSKeMx5o8SwS1wFQ3tGyd3Fr8Nw8KD6cdIDiMIYzFLH9qjZpFsugbS4J119lKnKxkvYs7I6Jy4nCyYlCCI2KFTfWyq1wwv8Ai3W4bxVQ+FaORFYAE2YWa+lzb3Gm3ovt5cPg3iLOt51kzKGy2CKPSHG4GnhVNtbFJJJH1ZzKFGovoczcxppan3M22wjC/Hu9lOeC/Zx/uL7hSdgh38eY114aU54L9mn7i+4UsgRGvomNJfFP81UP0pzmMYVhlNml0YEg6JoQCKYOifoyeK/5quMVsPD4or9YiSQR3KhxcAta5tuPo8aaCtCydOzj8fSiJ1CyQdUR/WYcRNfxjnVr+pxW5aSX/wBNjhL/AMsu2Hk8AjFVbT8LGi/pB6JwYN4zEXtKZCVJWyC9wqBQLKAbAa7qsejv0dxmzYx5I2IDLFHfMynmbE6cVUArcXOopq6NvxYi47ESFishckGxzMW1H7xNbYTFKI2URZpDmylVJIDKFPo8tbX4tprXUdp/R9gWW0fXJIxAUtmILHdm61SLcSAQbA2pMl2PJg8UcPKEJylgy6LIhVyrAbxqpBB3FTvFiVcA+SwFYpZEOZGjIzOC+ZblkjC28CjE6fe41DjsSZFUBQgV5SOzrlbIFB4jKE5n0j6+44DAYVY4yY4QciXJVL7hxI765f0+VPrknV5cuVLZbW9EX3UHFrkEZWyl2BhetZw7tZQtsthvvvuDy4UzYDovDI7XTMwjYrmse0PVaqfownbk8F95p86OL9o//Sk+FKlkeTdC5D0bxbhSkACkAjRRcbwdK0xXRPEovWSIoVdT2hrbWwA7h3V1PZko6mL0v2afdb8I7q12lZlQWNusTh399P448kt74ONQ4zDliEkVh28uVZG9IAC5CW7G/hc7jrREk0CsrljvuqdWxL5CFVSLCxe1zcfe14k9d+oRXv1C301yx30N+dafVEV0yoF9IblF9Dy8a21oO6xWi6D5gG63Lm7WXKOzm1tv4XtWU8JoAAN3fWU21C7mcdxcgGFxffDIP8Bpgh6XskSKEDBcOjXJAuxZEtqORJvSzPGGw2LuT2YJCPEIbVb4PoPswYeOUoc/VxubyG33cxseGtSddlRhw3ScSSiMxrYvOt7jdDkym3fmOndVm2Pi4qnkKoZ+hez55GkZFLSAOctrEn0tBoNdfFq1/wDDrZ34B7PlU3tCi7l2vCo0VPJa4hhJ1O2usNspxrtbS1jIx8q6qfo/2cN6keGX/TXJItnxNtb6udYfrbR2Nv2YcgcLbhT6dZM6o7xHtfD29FB6lpf6Tba7Z6plA+q4kaBD2yFy8N/Z0FSx/R9s38Psj/0UHtLo1srDtlaIMeqlm9FN0WXTRDvuf7tCPOGK69FnsbbStPKZWUr1WHy3CgZipL2035mN+VG7Q23hgjaRHsn8HKqjCdFdlyyPGkS9hI3JyRi4kBI3pyAPrr3H9BtmqjMVC2B3CIa8Puc6Z/0yr0cQ2DKBjMO7WsJ4ib7rB1JvXe8Z0mhC2jWJmzRi3Z1UuofcDuQsfVwrlOw+iJWQSTn7NJCMmhLrpZiC2npXy2PoG9tLtowEEcmaKOMcmCAEA3007rXtQnNdDVbdl7HttCYevghRXbKzHJowjdmAOUa5wvLS9Lv0j4rDNg2WHqixlj9AqTYB77tbbqspIMO0bRsjMA6tGjBCgIBXMwIOvaO78VA7R6P4eTDyJHCnXMhyZERCHynJZha3bCjUgEE6UE02jLBTdDsQi7NlQ5Q5xIvffk6tL94FxS70hhUTRHjkXid2Z6cOjnRtYMLIuPwd52l7BbIT1ZRASGDW0a58apZeickssRjyxp2A+9eLFmy27Ry99zbuJDt0+QxrJX4E+/v/AEKcMEewn7q+4VXydEpUV5Y7tEoDAuHDn7NZGAUAq1s1g17Eiw10qy2aLIhP4V9woTYsRw6MR2RzzK/Gr+NZD+zZF3XzozXHcA629tUXRt7rJ4r8aIxu1sh6tCCWHpKdVtw08r8L3oxmoxtiyVukLfTxJBidn9Y8bt1y2yIyD0494Lvv/V6eoGkzyHKt8wFy50ARSB6G67E+LGkXpxiGfEbPJjaM9ali1rG7xnTK17A8DY1Z7b6dw4CeSGaOV2OV80aoFsyqAO3IDfsnzFVTXIlDJtJpOpkuqCyMb5ySCASD6A1G+kb6Qc313DlrfsZd1/zVPL9JkE32CQYlXlVlUuIwoup1NnJIG82Bql2/jJZ8TFIwzKsTgMq2Goci577UG1wZJnTtnTRiKO1r5E3KTrYchXLPpAs2NkYX9FN4I+4OBp/wPSGDKEDNmVEVuw/ZNrG+lrab/GkLpoGlxkjxqxUqmpBG4BeNvvCw58KEpYGhyV/RcduXwX40+dHR9o//AEn+FKXRrDRhSSwRz2WBDXvqQbcrEcLHmLat2wVKyOCLfZyfDdUoyTkO3hjVs1/sYtD+zTh+UV5jm0Tsn9onLn41FhcUseHiZrgdWmt1/COZqLF41WZEAYMHQ6j2X3X7qs3gkuSzzn8Lf4fnUEznOnZP3uXLxoX+m4c2UEsbX7NjxIO47xbWpBiQ7oQri2b0ltfQ86zafDBVB+c/hPs+deV51ncfZ86ymAcLmxH2c6BlBkRoxc2sWW2vdqN16A27i3GHKdZqIo4yA3J42OngB32tzqrZBy5VFiYlyNoPRPsqCas6HHAw9HNqO+HtLI7iPLbMxIGgUC5PC2g4Xa280xp0oyAJvIA++L6+Ph7KSOiUXWJLFe2YAjxVrj2gVLtiEKUB1IQqb/lY/OrakVsFhY0YnpcDYAjW+ucbv50oJhB9Z+tCdFbrXkClbi4YnUhwSL+BN6FYjly+FaM4Fv1zrnWOClDa/SucKCs0JJtoI3uoPH9rb/egsTtmWQ3aWNyUkj9C11fRgCJNL20J5cao8FLCW+1Z1W2mRQSTpxJsulzfXlV2I8Ba8cmJuL5S4jtp6NwoB8aFUELw/SF45GZMRB21VDdG0WLsLr1guba342uNDVP0r6QzSRonXoyscx6tGQ2A3NdyePom3sqrzj2fKgce9wvr+FPBXJCzxEFwuMkiN45HQ/lYi/iBofXV3B0wxSixaN/3kA/gy0utWCulxi+Uc9tDQvTPE3BCxAjccr3Hm9DYjpDipD2pWW/COyeZSzH1k1RAVNCNayhFdGcmMMM0seHl6t2W63NidczAMT32Y676rsFt/FRjKs75dNGIcC2osrhgNeVGLEOplP5dPVVAhp5RTeUZMZv/APVY2SytiJNdOyEQ8/SjVW9tNOz9poEHWyWb8xLM2l7k793E8RaueYVjmHjTSwKOkksUnUnL2gMuYZfuyMpX0vHjxqWskoYXY+nmWS/fpGRFNGjemGAI07NiL6g62bgRS3LtQx4Y9VIyM7D0Sb6EHML+ibi2hF+NGY6XDvGViikjZmUDNJm7JOotbf6OvcedV21cEiJBGv3pAD3nML+0mp6UU1kpLFjFJtFpJMHC1y0M0YZyWuzSvHJ6vS5n1U67XZ1x0aIzrnkVbhiSLrHm1a/3M1cyw+OKYyRkWN264ZRIuYBgQikKCNQVFrn5hz2Ftx8Ri43nEd1zG6pqxWNt1iSxsd2ugoyeXXsmljIgY/HTR4nGoJGtndgCbj9qttGuD2H5cuVQ7ExWJleSJJpFMhVmIZjlUHttYHQANc2toKg6VkjHTWBHaHMb0XSouj+OaKcFTl6xWjve1sxB3+KgeumrujfBnl2liIsRKsbkXRHRSxCnMMxIH4mW/lVe+PxU8koMkjgRPIACcoCAE9i9rA++9OMnRN8aeuGJRSUQLmViUZC51IP/ADGFqN2d0NjwqiQ4gZ/tBMe2EYSHshFAuhFwL66jdyG6G36anwI/RPaEuV5M8jhGv95goy3N9dBrw5eAq92FtqeXacIaW6sHQomZYyTE5U5LnQqAdb2K+FMuA6KTxvIRNG8cgRWFmXLkJJOUk5y2a53bgPC5wWwhE14jGveNLi4LW35bkXPO1KmotuuTJWcf6QbZxC4+TJNIvV5I1Cu2UBERSAt7WJUm1t5o7DbcxUpRXkYi4GmVTz3qoI3cDSttPFdZi55RZg0sjAjcQWNiO4i1W2xWJkW28a252rqhGNK0TZZ47ac6SRZXKasQysbsArekeV+fIU1dFtrTnGSGSaR4oYiCo6xwGYxgErrmIAftW0DHvpGw+HJKMbgWsb33Bwo1PPK5ora205MNC/USMv1jOkjZRfqwznKD9z9pa41sopFFbeB28sqYukOKYZmxU9zcm08o3m+4PpWVTROLDdXtPgQt7/CvJBcEcw1eX+FYT8a4DrJ+hswV5NdQpPs09V70XttGJDG1iW3c2Cn4E+uqDYs/V4lNbKxynwOlNBYSCWJ9GBIXuZS2U+Rt4GuqX5RolHkoGH68qjdff86Ilw8gNjG41/CdfA8fVWqYSQ/c4neQOf4iK5SoMia+o+6tom3UQ+DdVDtlAtpZ1N/DKTeur/RhsSNMMZ5lRpJmuuYA5Y10XfuuczX4gryrXYG6OabB2BNjCwgVWKBc13VbZr5d+/0T5VSbUw5jdomtnjd0cAg2ZDlYXG/UHWvp4YdQbrkUcAFA9oOtcy+mxFTD4YA75ZDvJPo66kk7zT6f7E5StHGyKwVhNeA10kSRamgbUd9DiiMONaZGL9IXeCRY0Z2IACqCxIzLfsjU2F6W8liQdCDYg7weRHA1076KkH1sXJ0RyN41Fq6T0h6NYLGA9fEuf/iL2XFr27YFyNT2WuO6lnKpBSwfO+z17YrsWyccfqsag6ICNOJJJ8rG3nSd0h6EHCHrIpetiLAaqRIlzZbgCz6m1xbU7qtsDtCKKARNIvWDtFRqbBr8ONuFabThgaKYtY2KSKWRJImiRHJiJVh1iozZWUn0l9DdprUcafbwBmvd83hYk/Gt9ubY69iYx6Wijx0HrqbZkQfEejogya87nN7bgd1CEeBm8BB2kTqDfW/dxqdNpurBs1iL6rmJFxb7q3rWHBlVs6kkWt6NgOWUqf1apQq8R7F+CivPcztUcZRWbTxJdZWsxLK9z1T8cliWK6aRg3PA+NJk++ugY0qY5OybZG9xqj/oePNZlI+zRjqdWN7nf3bqtpaqXJLV0/QV0L6Wy4eWMSSM0OazqxzWU7yL6i2/TlT3tHbEWJKGB86Fhc2I1BtYg66b/WK5RhMMhd7jsgtlseAJA8dKa+hINmHAOSP7K7/ZVNRxfBGKa5On4/H9T9ofR3N4XOvq+dcs6Z9M55JJIYZcuH9G8dryAqM13te1ywsCNOdPvTNCcHNbgjfM+w1zjZ/Q151Q9aELC4GS452vmGtvcaKavIKwKMDa0y4CTKrso16t/VZTr6q1x/RKSFnBkVskbSXAIuEIBA133NX2w9gskuEDtf6wsrhdbARKWytrrmA4V0R1IrsntYBgM0iDt9pQrtcElu0FAueWa/qplwaNHJLGIpbBl3/hu1m7N7gsptu3HiKEw2znVmjKBM0O5QNCCdd+urDyFNeHlDHOxdWKgEZR42vxsSbeJrl1dfdiPBeGnXIqS4BmZj1F7s2pza6n8tZTvnT8XsFZUfIymxHGHEYveQb7aa33biCdPEcK8bERDdnb2C5329E28RQGWtgtVonQDPvPifV66uIdqxuFzkxyAAFwMytbdmFwRpppfcKpZ/SPiagNXRG6Y0S7TmSMCN1dBcsyNfeSTdDZgNd7KK8wO3CT2lS+tuyLEnU3AFtaWkkKkFTYg3HjXXeiWzdky4SOV8OOtK2cZnPbUlSVUvoDbNYbs1LNJrI0JSvAo4nGrIQZIkOUWFgVAHglh699POx8vVxRgdnqtB3XI491V/SjCYFYnMACuuoALeViT76I2Y9jF+66+TX+NQjGi02mMmxtpm5ic9tfRJ++o/zD2jXnSL9MGODyQRX9BHdh/wBQgL7Iz51Y9IMSYUeVfSQqVtwYkAHzOvdeua7Ux8k8jyyNmdzcncNNAAOAAAAFVguyEitIrLV69YKsiZgozDDnQoozDb6ZGOh/R2+XEIed1/vKbe21dKx+I+4P7XyrkOw58trGzAqb+BHGulIxI138aGquGNEA2/A80GIiQEuYboBvLA5lA8SoHrrkeN2NisPlfExSRLfQsLFiOC66m3l7K7RgH+2c8hH/ABrf31yjp1t+XFSKkv8AVF0I/MGs3h6IqcLGYHhMWLWjURjmCS5vzc6jwWw7qu9iS5WCjf8AP40r4Gw42pk2Kis4F9T49966OEIuS5ER4k+o1rIuX7jH+1RP9FEcfIfGp48KFsCa8V0erZSY6Z2RkEbdoWOttDv0tyvQGJed2Zlha5AUaE6C/IC+/wBlOKoB94jzrVifxE/rwpoyrhCSVnOo8FiEv9i5FzuB3k3pn6LS9V2ZUkisj6yIygsRawYixJJpiRH/AF/OpEiYHdc936tTvVb6J+NLst9t7RgjWSOWVFJA7JOpBW3ojW2lLWw9sYWOELJJbKz5QEkYhesbq/RU/dymrXuI05ae7jUEuFjNwYwPCw+NMtb4J4vpU7V2xhpJAUZ2XqXQ/ZS+kzIR2SgNrKdd1FwbTjL4BlzXiCxvdWFi8bo3D8ZUd+bxqMbMjJvrutvO7u19tY+z4hva3G2u8ajxtYH1UfJYVp0HJgpyyOxjBUEbyNGsSPNV8qPySDfk9TN8qo4toPmyxs3r3eRv8Kt1VinbJP67qRabYzlRv1h42/vD515VT1HcayqeH6Df8OcKvdUojNbg1upNZsyRQ4kdpr8z76GNH7QX7Q+F/ZU2A2erpmYsNSNLcPEVfekrZzeNuVIqTU8eLkVcqsQOQNXKbEjP3n/w/KtzsBMpKs1wCQCVsSOfZoeWA3gmA7PxDsyIxNi67+8gV0TDSW6ruL/5a53sdM08fiW8gTT2jaL4n4Us3k0UbdLZAYpRzVT5MD8K5tJTz0ie0T+AHmQKSHNNpu0LNAxrFNestYtWRM3WiYe6hQaMwx1pkAZdiAllXmQP1511OM1zfo+LsuliWVQPafZXRgbGl1nwPFAuz2vJiD3E/wB23yrnvTHo5OcdO0cZMbuJFN1AJkUM28j7zNT9sI5jN+ZJfjWu0os5RtNUUeVx8K5pajgrRWEFOVM5nLsKSKMyyABVtpcE6kDS3eat9kR9VNFGdS69ZcHQatpqN+ntq56QYY/VZraWRju/D2vhVWms+Ea57URUd1r7vOgv/RNx/wClPFFMZ3lNtbedaLKDzPl+j6qzqzfUtbvub1MtuAH68a5aLkBBOlj3WvUqIP8AcEe076IVFPIeBFekDfceyjQLIUUfi9tSq3L5/CtXKcTryt89aHcjUC3iB7ufu8d1EBMZT+K/sNQzORvJPr0/nXoTTRh4fPXWqTakzAEBvYKJiTEbWYXC0FE7u2Yse88/DkKrcNJmzX1sfgKsYw27UCqRjQGyx2QLvYCmeRbLS3shrNp+v5UwTvp+v13UULIA6w8FH69dZXrTAcPb/KspxcHPFArdUqsbHtwsPCtPrj/iPmansY3kiR7TX7Ru5f8AL8yKtdkw/ZJpcm58ySPZVDiJSxYk3Lbz4W/0ii12pIoAViAAALADQbtwp5Rk4pISE4qTbGdMKbej8a9ljyozW9FSfIXpUfaUh3ux8WNDPiGY76n4Zdso9ePSLbo5GRMCdxjYr6mCn3GnAr2VP5vgaUeiwJkckk5UsO7M19OXo05Ov2YPJh7jTy5Ix4K7pHAWhfuF/wC6c3wpQgwDyIXUA2NiNx4c9ONdBxRvdbX7KnzJB9nvpX2KMjSxncDbv4i/sBptO0hZZFqaBg1ipB5f7V6mDkJAEb3O4ZW18NKu8Sn/AJi3ML8KYEwwuDy1FVUxHETm2VMLZonW/MW99b4bClXCtoxF+G4eHhTTtCQlrnfVJKPtkPNWHvrObRowTYx9DWL4krbsxB7nmwOQW5byfVTziXt5GlDoAmksnF3A8rt739lNGPfst4UkpN5YyR50T1Yjmre2qvau2GiZUAU9i+o11Z+/lVp0QP2g8DVD0hwpMinkoG7kT86lKnHJSGJELbfdlIdFIIIPgRY7zVQrFUwrE9qKTISPwv8AeJHeB50dHgW33K/rurybZrOpUyCx5qLix0INxrepqkVeS6XEE3ub+N/50QuKsB6Jquiwug0YmwuRxNTpBY7/ADFzQpDFh1ykb18NPlWrRWtbfyv7v1bWgQxPEFOfAnw4+rz4UdF6I017jv8AG/u4cK1UY96kngCfh38/d761aIjj79/jrapVlXjf9eqpRIp3a+XyrGK+YNbh76X9rXHE+sU0YhrjRb+XvtS5tU33/CsuQop9jDtyDuBHjqKtSOHn8qH2Bh7tKwG4KPPN8qt4oePl8/18qomL8CMAvV7/AEj7O6rCSS4qoR+1RqPpfl7/ANe/urJgaMt+tayoM5rKNhpHLShrRkNMY2TGN5Zj5ewAmiYtlxH+rHrZj7movVSJ+FsUOravMhp2/oaHjGPUz/OtxseD8H+J/nQ88TeB+xHEJqI2B3iugps6Af1S+vMb+piRRK4ZQLL2QNwUgD9eAof6F6D/AJ/ot9E4tJW55B5ZvmKbpV+yPivvtVa+BZmUrK65WBIsO0AQSNOBHhvqxxYzRMl8gIH2lwQtiDflw50N6btm8bWEa3GrEgDIdTputx9VLCzIuImYuoU5dSQAdBxoDGPK90eUsoJFtArWO8hbX3X1vQ6YVRobH4VdUQaYfJMhxAYMCoUXYEEaEX1FXQ2rCBfrAfAMfYBS5gEHWNa1rfKrZYRW3UHbZDitrIzdlJSOeUf6qEabNJEQrD0t4HEdxq0EI7qg2pGAqMPuut/A6e8il3WMo1kK2Bt44dGRYWlOcnRgoG4WJsTw5VcHa+MnRimHiF+LSMcvcwAGtVGHg3EDfr4k86uNnTtHfKRY2uN97eq/HgaSUnWB1BchGycfi4bE4eMta2cyEJficpUH1ZqusGjumacRasSMoO423Em9tOdb4Yo6B8up38ge6vJ0vqNDxPH9aVJ6jaoZQV2TJDEBoo9ZPuJrZZI13Io7x/IUCj6gXJ9/md9ev2hfQ8CSxC6cL6lvAEcdb0vI9UGvjwedu4Xv3DiTQZfNe4sPw773/ERof3RpzvUeg1uORvx42FhoPVw561uGA4H1gfPlWDgnhCcVF+dSugG6x8aFaVeP68BWol7jbwNYFEzr4+Q+VeNuv8DUby39EeyvAx4b6IKA8Qx1toP1xpf2kxO4g+H86Y8a5sfhSvjjvNZDIsujsf2LH8TnyAA4d96MnnB0Xf7gOQqLZ/Yw0Y5gt/fJb3GvRFbfvPs/XzpmwHiDhv8AGp3fSw/X6+NBtPY/y/n+ta2V78vbcX9VY2CbOeHurK886yjYKQvnd5UZFWVlSKEz1uN1ZWUrGPRWg31lZWZkFxoOQ4+4VXba9BfFqyspofshJcMX7bqim3HxrKyulEGQ7P8ASb1VcJvrKyi+RVwGpuoTav7GTwHvFe1lDsPQRhdw8aKj3n11lZU5FIjPs79kvg38TVJHurKyo9joEn4/9QD1G2nh3VvLx7rW7vDlWVlM+Ddmzbx4UO+ma2mvzrKyiZEke/yrfFKL7v1esrKz4Av2NY/RrSXfWVlDoIFNuPj86WNp8ayspomGXDehF+5H/CKlkrKyixUVZ9Ier3UVDu8/hWVlZhQRWVlZWMf/2Q==",
                                "altText": "pic",
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "Image",
                                "size": "Small",
                                "separator": true,
                                "url": "https://www.foodbusinessnews.net/ext/resources/2020/4/CoupleAtRestaurant_Lead.jpg?t=1587991293&width=1080",
                                "altText": "pic",
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "Image",
                                "size": "Small",
                                "separator": true,
                                "url": "https://assets.architecturaldigest.in/photos/60083ddecce5700439e123c4/16:9/w_2560%2Cc_limit/restaurants-owned-by-cricketers-1366x768.jpg",
                                "altText": "pic",
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "Image",
                                "size": "Small",
                                "url": "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/4ad20-pune-restaurants.jpg?fit=1000%2C667&ssl=1",
                                "separator": true
                            }
                        ],
                        "imageSize": "Small",
                        "separator": true,
                        "horizontalAlignment": "Center"
                    }
                ],
                "separator": true,
                "horizontalAlignment": "Center"
            }
        ]
    }
    return card;
}