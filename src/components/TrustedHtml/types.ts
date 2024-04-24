type AllowedTags = Extract<
  keyof JSX.IntrinsicElements,
  'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'td' | 'small' | 'strong' | 'em'
>
export type TrustedHtmlProps = {
  [K in AllowedTags]: { as?: K } & Omit<
    JSX.IntrinsicElements[K],
    'dangerouslySetInnerHTML' | 'children' | 'as' | 'ref' | 'value'
  >
}[AllowedTags] & { value?: string | null | undefined }
