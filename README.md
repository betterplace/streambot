# betterplace.org Streambot

## Modules

### General

- All modules will update every 3 seconds.
- To create your own fundraising event go to https://www.betterplace.org/de/fundraising-events/registration/preselection?tracking_via=github-streambot-readme

### Customization

Folgende Parameter können verwendet werden um die Anzeige anzupassen:

- `textColor` - hex color value (without #), e.g. `&textColor=ff0000`
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`
- `fontFamily` - as [google fonts](https://fonts.google.com/) identifier, e.g. `&fontFamily=Indie+Flower`
- `fontSize` - numeric pixel value, e.g. `&fontSize=42`
- `interval` - how often (in seconds) is new data being fetched? - e.g. `&interval=5`
- `demo` - show demo data instead of actual data (useful for testing) - e.g. `&demo=true`

### Progress bar

[Example](https://streambot.betterplace.org/fundraising-events/30943/progress?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

<pre>
10.059,00 € von 14.500,00 € gesammelt.  
[|||||||||||------]
</pre>

```
https://streambot.betterplace.org/fundraising-events/<ID>/progress
```

Additional customization params:

- `progressColor` - hex color value (without #), e.g. `&progressColor=ff0000`
- `progressBackgroundColor` - hex color value (without #), e.g. `&progressBackgroundColor=ff0000`


### Top donation

Will show the all time top donation for this fundraising event.

[Example](https://streambot.betterplace.org/fundraising-events/30943/top-donation?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

<pre>
Top-Spende  
25,00 € von tordans
</pre>

```
https://streambot.betterplace.org/fundraising-events/<ID>/top-donation
```

### Last donation

Will show the last donation, based on the reload-time of 3 seconds. Should the last donation also have a comment it will also show up within the 'Last comment' module.

[Example](https://streambot.betterplace.org/fundraising-events/30943/last-donation?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

<pre>
Letzte Spende  
25,00 € von tordans
</pre>

```
https://streambot.betterplace.org/fundraising-events/<ID>/last-donation
```

### Last comment

Will show the last donation with a comment, based on the reload-time of 3 seconds.

[Example](https://streambot.betterplace.org/fundraising-events/30943/last-comment?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

<pre>
Tolle Aktion. Auch ein kleiner Beitrag hilft.  
10,00 € von Anonym
</pre>

```
https://streambot.betterplace.org/fundraising-events/<ID>/last-comment
```

### Donation alert

Show for a certain duration (default 3 seconds) the amount and the name of the donor. Additionally it may show a different wording, a gif and a mp3.

[Example](https://streambot.betterplace.org/fundraising-events/30934/donation-alert?gif=https://media.giphy.com/media/vQqeT3AYg8S5O/giphy.gif&gifHeight=120&wording=Danke!&demo=true&duration=2.3&mp3=https://www.w3schools.com/tags/horse.mp3)

<pre>
   (`;_.---._;`)  
    )_\     /_(  
   / _'\ _ /'_ \  
   |(o)|/ \|(o)|  
   \___/| |\___/  
   /`,  \_/   ,'\  
  |:/ ^ -   ^ \:|  
  |: - ^  ^ -  :|  
  \\ ^_ -^ - ^_//  
   `,---.-.---,`  
    (//.' '.\\)  

Danke!
10,00 € von Anonym
</pre>

```
https://streambot.betterplace.org/fundraising-events/<ID>/donation-alert
```

Additional customization params:

- `wording` - custom thank you text message, e.g. `&wording=Thanks!`
- `gif` - gif url to be shown, e.g. `&gif=https://media.giphy.com/media/vQqeT3AYg8S5O/giphy.gif`
- `gifHeight` - height of the gif in pixel, e.g. `&gifHeight=100`
- `mp3` - soundfile to be played when new donation arrives, e.g. `&mp3=https://www.w3schools.com/tags/horse.mp3`
- `duration` - how long (in seconds)


### Project Logo Stream

Show the organisation logos of the projects that are associated to the event in a loop. The interval can be adjusted accordingly. The default is 5 seconds per image.

[Example](https://streambot.betterplace.org/fundraising-events/30233/project-logos)

<pre>







   _          _   _                  _             
  | |__   ___| |_| |_ ___ _ __ _ __ | | __ _ _   _
  | '_ \ / _ \ __| __/ _ \ '__| '_ \| |/ _` | | | |
  | |_) |  __/ |_| ||  __/ |  | |_) | | (_| | |_| |
  |_.__/ \___|\__|\__\___|_|  | .__/|_|\__,_|\__, |
                              |_|            |___/







</pre>

```
https://streambot.betterplace.org/fundraising-events/<ID>/donation-alert
```

Additional customization params:


- `duration` - how long is the interval between logos (in seconds)



## Build & Deploy

```
$ yarn build ; firebase deploy
```

## Development

```
$ npm start
```
