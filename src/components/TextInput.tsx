import React from 'react'

import { HtmlInputProps } from '~types'

export interface ITextInputProps extends Omit<HtmlInputProps, 'className' | 'value' | 'ref' | 'onChange'> {}

const TextInput: React.FC<ITextInputProps> = () => {
  return <input type={'text'} />
}

export default TextInput
