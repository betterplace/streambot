// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { formatCents } from '../tools'
import { Nickname } from '.'

export class DonationAlert extends React.Component {
  audioElement: any;
  props: any;
  setState: any;
  state: any;
  timeout: any;
  constructor(props: any) {
    super(props)
    const params = new URLSearchParams(this.props.location.search)
    this.state = {
      hidden: true,
      gif: params.get('gif'),
      gifHeight: params.get('gifHeight') || 'inherit',
      duration: params.get('duration') || 3,
      wording: params.get('wording') === null ? 'Neue Spende' : params.get('wording'),
      volume: params.get('volume') || 0.9,
      data: {
        id: null,
        author: null,
        amountInCents: null,
      },
    }

    if (params.get('mp3')) {
      // @ts-expect-error TS(2345): Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
      this.audioElement = new Audio(params.get('mp3'))
      this.audioElement.loop = false
      this.audioElement.volume = this.state.volume
      this.audioElement.load()
    }
  }

  componentDidUpdate(prevProps: any) {
    // New ID must exist and differ from previous one.
    if (
      this.props.data.id &&
      this.props.data.id !== this.state.data.id &&
      // At least one data field must be present.
      (this.props.data.donated_amount_in_cents || this.props.data.author)
    ) {
      this.setState({
        hidden: false,
        data: {
          id: this.props.data.id,
          author: this.props.data.author,
          amountInCents: this.props.data.donated_amount_in_cents,
        },
      })
      if (this.timeout) clearInterval(this.timeout)
      this.timeout = window.setTimeout(() => this.setState({ hidden: true }), this.state.duration * 1000)

      if (this.audioElement) this.audioElement.play()
    }
  }

  render() {
    if (this.state.hidden) return null
    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <div>
        <Gif src={this.state.gif} height={this.state.gifHeight} />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <br />
        {this.state.wording}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <br />
        {formatCents(this.state.data.amountInCents, this.props.params) || 'Spende'} von{' '}
        <Nickname {...this.state.data.author} color={this.props.params.get('nicknameColor')} />
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      </div>
    )
  }
}

const Gif = ({
  src,
  height
}: any) => {
  if (!src) return null
  // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  return <img src={src} alt="" height={height} />
}
