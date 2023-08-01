# betterplace.org Streambot

## Modules

### General

- All modules will update every 3 seconds.
- To create your own fundraising event go to https://www.betterplace.org/de/fundraising-events/registration/preselection?tracking_via=github-streambot-readme

### Customization

Folgende Parameter können verwendet werden um die Anzeige anzupassen:

- `textColor` - hex color value (without #), e.g. `&textColor=ff0000`
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`
- `fontFamily` - as [google fonts](https://fonts.google.com/) name, e.g. `&fontFamily=Indie+Flower` (but _not_ `&fontFamily=Roboto:700`, use `fontWeight=700` instead)
- `fontWeight` - boldness of the font, e.g. `&fontWeight=700`, default is `400`
- `fontSize` - numeric pixel value, e.g. `&fontSize=42`
- `textAlign` - `left`, `right` or `center`, default is `center`
- `interval` - how often (in seconds) is new data being fetched, default 3 - e.g. `&interval=5`
- `demo` - show demo data instead of actual data (useful for testing) - e.g. `&demo=true`
- `nicknameColor` - if the name of a user is shown, assign a dedicated color - e.g. `&nicknameColor=ff0000`
- `currencyPrecision` - how many decimal fractions to be shown for amounts - e.g. `&currencyPrecision=0`
- `currencyDisplay` - how currencies may be formatted, valid options are symbol, name or code - e.g. `&currencyDisplay=code`

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
- `collected` - customize the default text, set to `false` to hide the text.
- `display` - optional parameter for fundraising events with a target amount,
  `&display=bar` only displays the progress bar, `&display=text` only displays
  the progress text, by default both are displayed.

### Donation total

Will show the total of all donations for this fundraising event.

[Example](https://streambot.betterplace.org/fundraising-events/30943/total)

<pre>
Spendenstand
12.270 €
</pre>

```
https://streambot.betterplace.org/fundraising-events/<ID>/total
```

Additional customization params:

- `headline` - customize the default text, set to `false` to hide the text.

### Top donation

Will show the all time top donation for this fundraising event.

[Example](https://streambot.betterplace.org/fundraising-events/30943/top-donation?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

<pre>
Top-Spende
tordans
25,00 €
</pre>

```
https://streambot.betterplace.org/fundraising-events/<ID>/top-donation
```

Additional customization params:

- `headline` - customize the default text, set to `false` to hide the text.
- `since` - only displays the top donation since a given point in time, e. g. `2011-11-11T11:11:00CET`
- `maxCount` - displays the first `n` top-donations, e. g. `10` (default is `1`), cycling through them per interval.

### Last donation

Will show the last donation, based on the reload-time of 3 seconds. Should the last donation also have a comment it will also show up within the 'Last comment' module.

[Example](https://streambot.betterplace.org/fundraising-events/30943/last-donation?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

<pre>
Letzte Spende
tordans
25,00 €
</pre>

```
https://streambot.betterplace.org/fundraising-events/<ID>/last-donation
```

Additional customization params:

- `headline` - customize the default headline, set to `false` for no headline, e.g. `&headline=Legen%20dary` or `&headline=false`

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

Additional customization params:

- `maxLength` - numeric: maximum displayable characters, the message will be truncated after that and `…` will be appended

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
https://streambot.betterplace.org/fundraising-events/<ID>/project-logos
```

Additional customization params:

- `duration` - how long is the interval between logos (in seconds)

### Hashtags

Show bars to compare the occurrence counts of the given hashtags in donation comments.

[Example](https://streambot.betterplace.org/fundraising-events/30943/hashtags?hashtags=Wahrheit,Pflicht,Egal&demo=1&textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=20)

<pre>
#Wahrheit [|||||||||||||--] 42%
 #Pflicht [|||||||||||||||] 52%
    #Egal [||-------------] 6%
</pre>

```
https://streambot.betterplace.org/fundraising-events/<ID>/hashtags?hashtags=<TAG1,TAG2,...>
```

Additional customization params:

- `progressColor` - hex color value (without #), e.g. `&progressColor=ff0000`
- `progressBackgroundColor` - hex color value (without #), e.g. `&progressBackgroundColor=ff0000`

## Build & Deploy

```
$ make deploy
```

In case of error 401:

```
$ firebase login --reauth
```

## Development

```
$ make start
```

Then open e.g. http://localhost:3000/fundraising-events/30943/progress?demo=true
