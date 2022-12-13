import { buildGoogleWebfontUrl } from '../styled'

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('buildGoogleWebfontUrl', () => {

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('returns no URL if fontFamily is missing', () => {
    const url = buildGoogleWebfontUrl(null, null)
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(url).toEqual('')
  })

  // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('with fontFamily present', () => {
    const baseUrl = 'https://fonts.googleapis.com/css2'

    // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns a correct URL if fontWeight=null AKA (intentionally) missing', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', null)
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans`)
    })

    // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns a correct URL with fontWeight=100 – a correct weight', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', 100)
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@100`)
    })

    // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns a broken URL with fontWeight=33 – an incorrect weight', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', 33)
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@33`)
      // We don't catch this case since it will clearly fail (font does not show),
      // and we could only validate the weight by checking with the GoogleWebfonts API first.
    })

    // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns a correct URL with fontWeight="light"', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', "light")
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@300`)
    })

    // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns a correct URL with fontWeight="bold"', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', "bold")
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@700`)
    })

    // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns a correct URL with fontWeight="regular" – intentional fallback', () => {
      // "regular" is what the GoogleWebfont API gives us and therefore our configurator uses.
      const url = buildGoogleWebfontUrl('Fira Sans', "regular")
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@400`)
    })

    // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns a correct URL with fontWeight="Some String" – general fallback', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', "Some String")
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@400`)
    })
  })

})
