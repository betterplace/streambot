import React from 'react'
import {formatCents} from '../tools'
import {Nickname} from '.'

export class DonationAlert extends React.Component {
  constructor(props) {
    super(props)
    const params = new URLSearchParams(this.props.location.search)
    this.state = {
      hidden:    true,
      gif:       params.get('gif'),
      gifHeight: params.get('gifHeight') || 'inherit',
      mp3:       params.get('mp3'),
      duration:  params.get('duration') || 3,
      wording:   params.get('wording') || 'Neue Spende'
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.id !== prevProps.data.id) {
      this.setState({hidden: false})
      if (this.timeout) clearInterval(this.timeout)
      this.timeout = window.setTimeout(() => this.setState({hidden: true}), this.state.duration * 1000)
    }
  }

  render() {
    if (this.state.hidden) return null
    return <div>
      <Gif src={this.state.gif} height={this.state.gifHeight} />
      <Mp3 src={this.state.mp3} />
      <br />
      {this.state.wording}
      <br />
      {formatCents(this.props.data.donated_amount_in_cents, 'Spende')} von <Nickname {...this.props.data.author} color={this.props.params.get('nicknameColor')} />
    </div>
  }
}

const Gif = ({src, height}) => {
  if (!src) return null
  return <img src={src} alt='' height={height} />
}

const Mp3 = ({src}) => {
  if (!src) return null
  return <audio autoPlay><source src={src} type="audio/mpeg" /></audio>
}
