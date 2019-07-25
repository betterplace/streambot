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

function extractFromParams(name, params, defaultValue) {
  return (params.has(name) && params.get(name)) || defaultValue
}

function extractColorFromParams(name, params, defaultValue) {
  return (params.has(name) && `#${params.get(name)}`) || defaultValue
}

function extractPixelFromParams(name, params, defaultValue) {
  return (params.has(name) && parseInt(params.get(name), 10)) || defaultValue
}

function googleFontsImport(params) {
  if (params.has('fontFamily')) {
    const fontFamily = params.get('fontFamily')
    const fontWeight = params.get('fontWeight') || ''
    return `
      @import url('https://fonts.googleapis.com/css?family=${fontFamily.replace(/ /g, '+')}${fontWeight && ":"+fontWeight }');

      body {
        font-family: ${fontFamily.replace(/\+/g, ' ')};
        ${fontWeight && "font-weight:"+fontWeight+";"}
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
      color:            ${extractColorFromParams('textColor',props.params, 'black')};
      font-size:        ${extractPixelFromParams('fontSize', props.params, 24)}px;
      text-align:       ${extractFromParams('textAlign', props.params, 'center')};
      margin:           0;
      overflow:         hidden;
    }
    .progress-label {
      margin-bottom: 0.6rem;
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
    }
    .truncate-with-ellipsis {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .hashtags-table {
      width: 100%;
    }
    .label-td {
      padding-right: 8px;
      text-align: right;
    }
    .bar-td {
      width: 100%;
    }
    .bar-td .progressbar {
      height: 30px;
    }
    .percentage-td {
      padding-left: 8px;
      text-align: left;
    }
  `}</style>
}
