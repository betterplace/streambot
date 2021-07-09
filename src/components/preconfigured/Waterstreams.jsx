import React from 'react'
import styled from 'styled-components'
import WaterStreamsBackgroundImage from '../../images/spendenanzeige_waterstreams.png'

export const Waterstreams = (props) => {

  const id = props.match.params.id
  const params = new URLSearchParams(props.location.search)
  const demo = params.has('demo') ? '&demo=true' : ''

  return <>
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap" rel="stylesheet" />
    <DisplayContainer backgroundImage={WaterStreamsBackgroundImage}>
      <DataContainer>
        <DataBlock>
          <Headline>Spendenstand</Headline>
          <iframe
            name='total'
            height="60"
            width="230"
            frameBorder="0"
            src={`https://streambot.betterplace.org/fundraising-events/${id}/total?textAlign=left&textColor=fff&fontFamily=Fira+Sans&headline=false${demo}`}
          >
          </iframe>
        </DataBlock>
        <DataBlock>
          <Headline>Letzte Spende</Headline>
          <iframe
            name='last-donation'
            height="60"
            width="230"
            frameBorder="0"
            src={`https://streambot.betterplace.org/fundraising-events/${id}/last-donation?textAlign=left&textColor=fff&fontFamily=Fira+Sans&headline=false${demo}`}
          >
          </iframe>
        </DataBlock>
        <DataBlock>
          <Headline>Top-Spende</Headline>
          <iframe
            name='top-donation'
            height="60"
            width="230"
            frameBorder="0"
            src={`https://streambot.betterplace.org/fundraising-events/${id}/top-donation?textAlign=left&textColor=fff&fontFamily=Fira+Sans&headline=false${demo}`}
          >
          </iframe>
        </DataBlock>
      </DataContainer>
    </DisplayContainer>
  </>
}

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
top: 75px;
right: 150px;
bottom: 57px;
left: 480px;

`

const DataBlock = styled.div`
flex-grow: 1;
`

const Headline = styled.h4`
color: #fff;
font-family: Fira Sans, sans-serif;
font-weight: bold;
font-style: italic;
font-size: 20px;
line-height: 43px;
margin: 0 0 13px;
`
