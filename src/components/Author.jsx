import {truncate} from '../tools'

export const Author = ({name}) => {
  return (name ? truncate(name, 25) : 'Anonym')
}
