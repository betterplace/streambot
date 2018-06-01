# betterplace.org Streambot

## Endpunkte

- https://streambot.betterplace.org/fundraising-events/ID/progress
- https://streambot.betterplace.org/fundraising-events/ID/last-donation
- https://streambot.betterplace.org/fundraising-events/ID/top-donation
- https://streambot.betterplace.org/fundraising-events/ID/last-comment

## Customization

Folgende Parameter können verwendet werden um die Anzeige anzupassen:

`textColor` - als hex-Wert (ohne #), z.B. `&textColor=ff0000`
`backgroundColor` - als hex-Wert (ohne #), z.B. `&backgroundColor=ff0000`
`progressColor` - als hex-Wert (ohne #), z.B. `&progressColor=ff0000`
`progressBackgroundColor` - als hex-Wert (ohne #), z.B. `&progressBackgroundColor=ff0000`
`fontFamily` - als [google fonts](https://fonts.google.com/) identifier, z.B. `&fontFamily=Indie+Flower`
`fontSize` - als numerischer Pixel Wert, z.B. `&fontSize=42`

## Build & Deploy

```
$ yarn build ; firebase deploy
```
