# betterplace.org Streambot

## Customizable widgets

- All widgets will update every 3 seconds.
- To create your own fundraising event go to https://www.betterplace.org/de/fundraising-events/registration/preselection?tracking_via=github-streambot-readme

### Standard widget

Pre-configured standard widget showing the total donation amount, the highest and last donation.

[Example](https://streambot.betterplace.org/fundraising-events/30943/standard)

```
https://streambot.betterplace.org/fundraising-events/<ID>/standard
```

Customization parameters:

- `withoutBackgroundImage=true` - hides the betterplace background image
- `textColor` - hex color value (without #) that only affects the text color of standard widgets without background image, e.g. `&textColor=ff0000`
- `demo` - show demo data instead of actual data (useful for testing) - e.g. `&demo=true`

### Progress bar

[Example](https://streambot.betterplace.org/fundraising-events/30943/progress?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

```
https://streambot.betterplace.org/fundraising-events/<ID>/progress
```

Customization parameters:

- `textColor` - hex color value (without #), e.g. `&textColor=ff0000`
- `fontFamily` - as [google fonts](https://fonts.google.com/) name, e.g. `&fontFamily=Indie+Flower` (but _not_ `&fontFamily=Roboto:700`, use `fontWeight=700` instead)
- `fontSize` - numeric pixel value, e.g. `&fontSize=42`
- `progressBackgroundColor` - hex color value (without #), e.g. `&progressBackgroundColor=ff0000`
- `progressColor` - hex color value (without #), e.g. `&progressColor=ff0000`
- `collected` - show or hide the collected text, e.g. `&collected=false`
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`
- `textAlign` - `left`, `right` or `center`, default is `center`
- `display` - optional parameter for fundraising events with a target amount,
  `&display=bar` only displays the progress bar, `&display=text` only displays
  the progress text, by default both (`&display=both`) are displayed.
- `demo` - show demo data instead of actual data (useful for testing) - e.g. `&demo=true`

### Donation total

Will show the total of all donations for this fundraising event.

[Example](https://streambot.betterplace.org/fundraising-events/30943/total)

```
https://streambot.betterplace.org/fundraising-events/<ID>/total
```

Customization parameters:

- `textColor` - hex color value (without #), e.g. `&textColor=ff0000`
- `fontFamily` - as [google fonts](https://fonts.google.com/) name, e.g. `&fontFamily=Indie+Flower` (but _not_ `&fontFamily=Roboto:700`, use `fontWeight=700` instead)
- `fontSize` - numeric pixel value, e.g. `&fontSize=42`
- `headline` - customize the default text, set to `false` to hide the text.
- `fontWeight` - boldness of the font, e.g. `&fontWeight=700`, default is `400`
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`
- `textAlign` - `left`, `right` or `center`, default is `center`
- `demo` - show demo data instead of actual data (useful for testing) - e.g. `&demo=true`

### Alert per donation

Show for a certain duration (default 3 seconds) the amount and the name of the donor. Additionally it may show a different wording, a gif and a mp3.

[Example](https://streambot.betterplace.org/fundraising-events/30934/donation-alert?gif=https://media.giphy.com/media/vQqeT3AYg8S5O/giphy.gif&gifHeight=120&wording=Danke!&demo=true&duration=2.3&mp3=https://www.w3schools.com/tags/horse.mp3)

```
https://streambot.betterplace.org/fundraising-events/<ID>/donation-alert
```

Customization parameters:

- `textColor` - hex color value (without #), e.g. `&textColor=ff0000`
- `fontFamily` - as [google fonts](https://fonts.google.com/) name, e.g. `&fontFamily=Indie+Flower` (but _not_ `&fontFamily=Roboto:700`, use `fontWeight=700` instead)
- `fontSize` - numeric pixel value, e.g. `&fontSize=42`
- `fontWeight` - boldness of the font, e.g. `&fontWeight=700`, default is `400`
- `wording` - custom thank you text message, e.g. `&wording=Thanks!`
- `gif` - gif url to be shown, e.g. `&gif=https://media.giphy.com/media/vQqeT3AYg8S5O/giphy.gif`
- `gifHeight` - height of the gif in pixel, e.g. `&gifHeight=100`
- `mp3` - soundfile to be played when new donation arrives, e.g. `&mp3=https://www.w3schools.com/tags/horse.mp3`
- `duration` - how long (in seconds)
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`
- `textAlign` - `left`, `right` or `center`, default is `center`
- `volume` - volume between 0 and 1, e.g. `&volume=0.5`, default is `0.9`
- `demo` - show demo data instead of actual data (useful for testing) - e.g. `&demo=true`

### Logo wheel

Show the organisation logos of the projects that are associated to the event in a loop. The interval can be adjusted accordingly. The default is 5 seconds per image.

[Example](https://streambot.betterplace.org/fundraising-events/30233/project-logos)

```
https://streambot.betterplace.org/fundraising-events/<ID>/project-logos
```

Customization parameters:

- `duration` - how long is the interval between logos (in seconds)
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`
- `textAlign` - `left`, `right` or `center`, default is `center`

### Top donor

Will show the top donor (sum of all donations) for this fundraising event.

[Example](https://streambot.betterplace.org/fundraising-events/41724/top-donor?textColor=28638c&fontFamily=Fira%20Sans&fontSize=25&fontWeight=regular&headline=Top-Spender*in:&backgroundColor=transparent&nicknameColor=28638c&maxCount=1&interval=3&textAlign=left&list=false&width=400px)

```
https://streambot.betterplace.org/fundraising-events/<ID>/top-donor
```

Customization parameters:

- `textColor` - hex color value (without #), e.g. `&textColor=ff0000`
- `fontFamily` - as [google fonts](https://fonts.google.com/) name, e.g. `&fontFamily=Indie+Flower` (but _not_ `&fontFamily=Roboto:700`, use `fontWeight=700` instead)
- `fontSize` - numeric pixel value, e.g. `&fontSize=42`
- `fontWeight` - boldness of the font, e.g. `&fontWeight=700`, default is `400`
- `headline` - customize the default text, set to `false` to hide the text.
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`
- `nicknameColor` - if the name of a user is shown, assign a dedicated color - e.g. `&nicknameColor=ff0000`
- `maxCount` - displays the first `n` top donors, e.g. `&maxCount=3` (default is `1`), cycling through them per interval.
- `interval` - time period (in seconds) after which the next top donor will be displayed if maxCount is > 1, e.g. `&interval=4`, default is `3`
- `textAlign` - `left`, `right` or `center`, default is `center`
- `list` - show all top donors in one list instead of cycling through them per interval with `list=true`, default is `false`
- `width` - width of the container, e.g. `&width=300px`
- `demo` - show demo data instead of actual data (useful for testing) - e.g. `&demo=true`

### Top donation

Will show the all time top donation for this fundraising event.

[Example](https://streambot.betterplace.org/fundraising-events/30943/top-donation?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

```
https://streambot.betterplace.org/fundraising-events/<ID>/top-donation
```

Customization parameters:

- `textColor` - hex color value (without #), e.g. `&textColor=ff0000`
- `fontFamily` - as [google fonts](https://fonts.google.com/) name, e.g. `&fontFamily=Indie+Flower` (but _not_ `&fontFamily=Roboto:700`, use `fontWeight=700` instead)
- `fontSize` - numeric pixel value, e.g. `&fontSize=42`
- `fontWeight` - boldness of the font, e.g. `&fontWeight=700`, default is `400`
- `headline` - customize the default text, set to `false` to hide the text.
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`
- `nicknameColor` - if the name of a user is shown, assign a dedicated color - e.g. `&nicknameColor=ff0000`
- `maxCount` - displays the first `n` top donations, e.g. `&maxCount=3` (default is `1`), cycling through them per interval.
- `interval` - time period (in seconds) after which the next top donor will be displayed if maxCount is > 1, e.g. `&interval=4`, default is `3`
- `textAlign` - `left`, `right` or `center`, default is `center`
- `list` - show all top donations in one list instead of cycling through them per interval with `list=true`, default is `false`
- `width` - width of the container, e.g. `&width=300px`
- `demo` - show demo data instead of actual data (useful for testing) - e.g. `&demo=true`

### Last donation

Will show the last donation, based on the reload-time of 3 seconds. Should the last donation also have a comment it will also show up within the 'Last comment' module.

[Example](https://streambot.betterplace.org/fundraising-events/30943/last-donation?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

```
https://streambot.betterplace.org/fundraising-events/<ID>/last-donation
```

Customization parameters:

- `textColor` - hex color value (without #), e.g. `&textColor=ff0000`
- `fontFamily` - as [google fonts](https://fonts.google.com/) name, e.g. `&fontFamily=Indie+Flower` (but _not_ `&fontFamily=Roboto:700`, use `fontWeight=700` instead)
- `fontSize` - numeric pixel value, e.g. `&fontSize=42`
- `fontWeight` - boldness of the font, e.g. `&fontWeight=700`, default is `400`
- `headline` - customize the default headline, set to `false` for no headline, e.g. `&headline=Legen%20dary` or `&headline=false`
- `nicknameColor` - if the name of a user is shown, assign a dedicated color - e.g. `&nicknameColor=ff0000`
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`
- `textAlign` - `left`, `right` or `center`, default is `center`
- `demo` - show demo data instead of actual data (useful for testing) - e.g. `&demo=true`

### Last donation comment

Will show the last donation with a comment, based on the reload-time of 3 seconds.

[Example](https://streambot.betterplace.org/fundraising-events/30943/last-comment?textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=30)

```
https://streambot.betterplace.org/fundraising-events/<ID>/last-comment
```

Customization parameters:

- `textColor` - hex color value (without #), e.g. `&textColor=ff0000`
- `fontFamily` - as [google fonts](https://fonts.google.com/) name, e.g. `&fontFamily=Indie+Flower` (but _not_ `&fontFamily=Roboto:700`, use `fontWeight=700` instead)
- `fontSize` - numeric pixel value, e.g. `&fontSize=42`
- `fontWeight` - boldness of the font, e.g. `&fontWeight=700`, default is `400`
- `nicknameColor` - if the name of a user is shown, assign a dedicated color - e.g. `&nicknameColor=ff0000`
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`
- `textAlign` - `left`, `right` or `center`, default is `center`
- `demo` - show demo data instead of actual data (useful for testing) - e.g. `&demo=true`

### Polls

Will show the counts of various hashtags as they occur in donation comments. Donors need to write their hashtag with "#" at the beginning (e.g. #beard, #nobeard).

[Example](https://streambot.betterplace.org/fundraising-events/30943/hashtags?hashtags=Wahrheit,Pflicht,Egal&demo=1&textColor=fff&backgroundColor=3F3F3F&progressColor=4597A2&progressBackgroundColor=AECFD1&fontFamily=Seaweed+Script&fontSize=20)

```
https://streambot.betterplace.org/fundraising-events/<ID>/hashtags
```

Customization parameters:

- `hashtags` - hashtags to be evaluated, e.g `&hashtags=<TAG1,TAG2,...>`
- `textColor` - hex color value (without #), e.g. `&textColor=ff0000`
- `fontFamily` - as [google fonts](https://fonts.google.com/) name, e.g. `&fontFamily=Indie+Flower` (but _not_ `&fontFamily=Roboto:700`, use `fontWeight=700` instead)
- `fontSize` - numeric pixel value, e.g. `&fontSize=42`
- `fontWeight` - boldness of the font, e.g. `&fontWeight=700`, default is `normal`
- `progressBackgroundColor` - hex color value (without #), e.g. `&progressBackgroundColor=ff0000`
- `progressColor` - hex color value (without #), e.g. `&progressColor=ff0000`
- `backgroundColor` - hex color value (without #), e.g. `&backgroundColor=ff0000`

## Build & Deploy

Enter

```
$ make deploy-staging
```

or

```
$ make deploy-production
```

to deploy the current revision.

In case of error 401:

```
$ firebase login --reauth
```

The latest deployed revision can then be seen via these URLs:

 - https://streambot.bp42.com/fundraising-events/30943/standard
 - https://streambot.betterplace.org/fundraising-events/30943/standard

## Development

```
$ make start
```

Then open e.g. http://localhost:3000/fundraising-events/30943/progress?demo=true
