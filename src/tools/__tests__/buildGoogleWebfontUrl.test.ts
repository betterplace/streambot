import { buildGoogleWebfontUrl } from '../styled'

describe('buildGoogleWebfontUrl', () => {
  it('returns no URL if fontFamily is missing', () => {
    const url = buildGoogleWebfontUrl('', '')
    expect(url).toEqual('')
  })

  describe('with fontFamily present', () => {
    const baseUrl = 'https://fonts.googleapis.com/css2'

    it('returns a correct URL if fontWeight=null AKA (intentionally) missing', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', '')
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans`)
    })

    it('returns a correct URL with fontWeight=100 – a correct weight', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', '100')
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@100`)
    })

    it('returns a broken URL with fontWeight=33 – an incorrect weight', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', '33')
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@33`)
      // We don't catch this case since it will clearly fail (font does not show),
      // and we could only validate the weight by checking with the GoogleWebfonts API first.
    })

    it('returns a correct URL with fontWeight="light"', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', 'light')
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@300`)
    })

    it('returns a correct URL with fontWeight="bold"', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', 'bold')
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@700`)
    })

    it('returns a correct URL with fontWeight="regular" – intentional fallback', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', 'regular')
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@400`)
    })

    it('returns a correct URL with fontWeight="Some String" – general fallback', () => {
      const url = buildGoogleWebfontUrl('Fira Sans', 'Some String')
      expect(url).toEqual(`${baseUrl}?family=Fira+Sans:wght@400`)
    })
  })
})
