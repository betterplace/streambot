import { RouteComponentProps } from 'react-router-dom'

type RouteParams = {
  id: string
}

export type WidgetProps = RouteComponentProps<RouteParams>

export type ReloadingWidgetProps<Data = void> = {
  params: URLSearchParams
  location: Location
  data: Data
}
