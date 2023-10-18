import React from 'react'
import defaultBackgroundImage from '../../images/spendenanzeige_standard.png'
import styled from 'styled-components'
import { WidgetProps } from 'components/types'

export const Standard = (props: WidgetProps) => {
  const id = props.match.params.id
  const params = new URLSearchParams(props.location.search)
  const demo = params.has('demo')
  const backgroundImage = params.get('withoutBackgroundImage') === 'true' ? null : defaultBackgroundImage
  const textColor = (!backgroundImage && params.get('textColor')) || 'ffffff'

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;1,700&amp;display=swap"
        rel="stylesheet"
      />
      <DisplayContainer backgroundImage={backgroundImage}>
        <DataContainer>
          <DataBlock widget="total" eventId={id} demo={demo} textColor={textColor}>
            Spendenstand
          </DataBlock>
          <DataBlock widget="last-donation" eventId={id} demo={demo} textColor={textColor}>
            Letzte Spende
          </DataBlock>
          <DataBlock widget="top-donation" eventId={id} demo={demo} textColor={textColor}>
            Top-Spende
          </DataBlock>
        </DataContainer>
      </DisplayContainer>
    </>
  )
}

const DataBlock = ({
  children,
  widget,
  eventId,
  demo,
  textColor,
}: {
  children: React.ReactNode
  widget: string
  eventId: string
  demo: boolean
  textColor: string
}) => (
  <FluidColumn textColor={textColor}>
    <Headline>{children}</Headline>
    <iframe
      title={widget}
      height="60"
      width="230"
      frameBorder="0"
      src={`https://streambot.betterplace.org/fundraising-events/${eventId}/${widget}?textAlign=left&textColor=${textColor}&fontFamily=Fira+Sans&headline=false${
        demo ? '&demo=true' : ''
      }`}
    />
  </FluidColumn>
)

const DisplayContainer = styled.div<{ backgroundImage: string }>`
  position: relative;
  height: 250px;
  width: 1392px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.backgroundImage});
`

const DataContainer = styled.div`
  position: absolute;
  display: flex;
  top: 123px;
  right: 170px;
  bottom: 17px;
  left: 400px;
`

const FluidColumn = styled.div<{ textColor: string }>`
  flex-grow: 1;
  color: ${(props) => `#${props.textColor}`};
`

const Headline = styled.h4`
  font-family: Fira Sans, sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: 20px;
  line-height: 43px;
  margin: -7px 0 3px;
`
