import React from 'react'

export function styled(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <React.Fragment>
        <StylesFromParams params={new URLSearchParams(this.props.location.search)} />
        <WrappedComponent {...this.props} />
      </React.Fragment>
    }
  }
}

function extractColorFromParams(name, params, defaultValue) {
  return params.has(name) ? `#${params.get(name)}` : defaultValue
}

function googleFontsImport(params) {
  if (params.has('fontFamily')) {
    const fontFamily = params.get('fontFamily')
    return `
      @import url('https://fonts.googleapis.com/css?family=${fontFamily.replace(/ /g, '+')}');

      body {
        font-family: ${fontFamily.replace(/\+/g, ' ')};
      }
    `
  } else {
    return 'body { font-family: Verdana; }'
  }
}

const StylesFromParams = (props) => {
  return <style type="text/css">{`
    ${googleFontsImport(props.params)}

    body {
      background-color: ${extractColorFromParams('backgroundColor', props.params, 'transparent')};
      color:            ${extractColorFromParams('textColor'      , props.params, 'black')};
      text-align: center;
      font-size: 24px;
    }
    .progressbar {
      background-color: ${extractColorFromParams('progressBackgroundColor', props.params, 'whiteSmoke')};
      height: 20px;
      width: 100%;
    }
    .progressbar > span {
      background-color: ${extractColorFromParams('progressColor', props.params, 'green')};
      display: block;
      height: 100%;
    };
  `}</style>
}
