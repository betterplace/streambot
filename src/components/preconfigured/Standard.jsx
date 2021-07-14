import React from 'react'
import styled from 'styled-components'
import defaultBackgroundImage from '../../images/spendenanzeige_standard.png'

export const Standard = (props) => {

  const id = props.match.params.id
  const params = new URLSearchParams(props.location.search)
  const demo = params.has('demo')

  return <>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;1,700&amp;display=swap" rel="stylesheet" />
    <DisplayContainer backgroundImage={props.backgroundImage || defaultBackgroundImage}>
      <DataContainer style={props.dataContainerStyle}>
        <DataBlock widget='total' eventId={id} demo={demo} headlineStyle={props.headlineStyle}>Spendenstand</DataBlock>
        <DataBlock widget='last-donation' eventId={id} demo={demo} headlineStyle={props.headlineStyle}>Letzte Spende</DataBlock>
        <DataBlock widget='top-donation' eventId={id} demo={demo} headlineStyle={props.headlineStyle}>Top-Spende</DataBlock>
      </DataContainer>
    </DisplayContainer>
  </>
}

const DataBlock =  ({children, widget, eventId, demo, headlineStyle}) => <FluidColumn>
  <Headline style={headlineStyle}>{children}</Headline>
  <iframe
    name={widget}
    height="60"
    width="230"
    frameBorder="0"
    src={`https://streambot.betterplace.org/fundraising-events/${eventId}/${widget}?textAlign=left&textColor=fff&fontFamily=Fira+Sans&headline=false${demo ? '&demo=true' : ''}`}
  />
</FluidColumn>

const DisplayContainer = styled.div`
  position: relative;
  height: 250px;
  width: 1392px;
  background-repeat: no-repeat;
  background-image: url(${props => props.backgroundImage})
`

const DataContainer = styled.div`
  position: absolute;
  display: flex;
  top: 123px;
  right: 170px;
  bottom: 17px;
  left: 400px;
`

const FluidColumn = styled.div`
  flex-grow: 1;
`

const Headline = styled.h4`
  color: #fff;
  font-family: Fira Sans, sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: 20px;
  line-height: 43px;
  margin: -7px 0 3px;
`
