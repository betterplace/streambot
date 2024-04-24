import React, { useMemo } from 'react'
import sanitize from 'sanitize-html'
import { TrustedHtmlProps } from './types'

/**
 * Use this component for and only for inserting HTML we can trust.
 */
export const TrustedHtml = ({ value, as = 'span', ...props }: TrustedHtmlProps): JSX.Element => {
  const Tag = as
  const __html = useMemo(() => (value ? sanitize(value) : ''), [value])
  return <Tag dangerouslySetInnerHTML={{ __html }} {...props} />
}
