import TimeAgoReact from 'timeago-react'
import { register } from 'timeago.js'

const localeFunc = (number: any, index: any, total_sec: any) => {
  return [
    ['gerade eben', 'vor einer Weile'],
    ['vor %s Sekunden', 'in %s Sekunden'],
    ['vor 1 Minute', 'in 1 Minute'],
    ['vor %s Minuten', 'in %s Minuten'],
    ['vor 1 Stunde', 'in 1 Stunde'],
    ['vor %s Stunden', 'in %s Stunden'],
    ['vor 1 Tag', 'in 1 Tag'],
    ['vor %s Tagen', 'in %s Tagen'],
    ['vor 1 Woche', 'in 1 Woche'],
    ['vor %s Wochen', 'in %s Wochen'],
    ['vor 1 Monat', 'in 1 Monat'],
    ['vor %s Monaten', 'in %s Monaten'],
    ['vor 1 Jahr', 'in 1 Jahr'],
    ['vor %s Jahren', 'in %s Jahren'],
  ][index]
}

// @ts-expect-error TS(2345): Argument of type '(number: any, index: any, total_... Remove this comment to see the full error message
register('de', localeFunc)

export const TimeAgo = TimeAgoReact
