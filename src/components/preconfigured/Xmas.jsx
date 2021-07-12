import React from 'react'
import styled from 'styled-components'
import XmasBackgroundImage from '../../images/spendenanzeige_xmas.png'

export const Xmas = (props) => {

  const id = props.match.params.id
  const params = new URLSearchParams(props.location.search)
  const demo = params.has('demo') ? '&demo=true' : ''

  return <>
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans&amp;display=swap" rel="stylesheet" />
    <DisplayContainer backgroundImage={XmasBackgroundImage}>
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
top: 123px;
right: 170px;
bottom: 17px;
left: 400px;
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
margin: -7px 0 3px;
`
