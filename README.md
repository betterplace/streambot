# betterplace.org Streambot

## Modules

### Generel

- All modules will update every 3 seconds.
- To create your own fundraising event go to https://www.betterplace.org/de/fundraising-events/registration/preselection?tracking_via=github-streambot-readme

### Progress bar

[Example](https://streambot.betterplace.org/fundraising-events/30943/progress?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

>10.059,00 € von 14.500,00 € gesammelt.  
>[|||||||||||------]

```
https://streambot.betterplace.org/fundraising-events/<ID>/progress
```

### Top donation

Will show the all time top donation for this fundraising event.

[Example](https://streambot.betterplace.org/fundraising-events/30943/top-donation?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

>Top-Spende  
>25,00 € von tordans

```
https://streambot.betterplace.org/fundraising-events/<ID>/top-donation
```

### Last donation

Will show the last donation, based on the reload-time of 3 seconds. Should the last donation also have a comment it will also show up within the 'Last comment' module.

[Example](https://streambot.betterplace.org/fundraising-events/30943/last-donation?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

>Letzte Spende  
>25,00 € von tordans

```
https://streambot.betterplace.org/fundraising-events/<ID>/last-donation
```

### Last comment

Will show the last donation with a comment, based on the reload-time of 3 seconds.

[Example](https://streambot.betterplace.org/fundraising-events/30943/last-comment?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

>Tolle Aktion. Auch ein kleiner Beitrag hilft.  
>10,00 € von Anonym

```
https://streambot.betterplace.org/fundraising-events/<ID>/last-comment
```


## Customization

Folgende Parameter können verwendet werden um die Anzeige anzupassen:

- `textColor` - als hex-Wert (ohne #), z.B. `&textColor=ff0000`
- `backgroundColor` - als hex-Wert (ohne #), z.B. `&backgroundColor=ff0000`
- `progressColor` - als hex-Wert (ohne #), z.B. `&progressColor=ff0000`
- `progressBackgroundColor` - als hex-Wert (ohne #), z.B. `&progressBackgroundColor=ff0000`
- `fontFamily` - als [google fonts](https://fonts.google.com/) identifier, z.B. `&fontFamily=Indie+Flower`
- `fontSize` - als numerischer Pixel Wert, z.B. `&fontSize=42`
- `interval` - Wie häufig (in Sekunden) werden neue Daten geholt? - z.b. `&interval=5`

## Build & Deploy

```
$ yarn build ; firebase deploy
```
