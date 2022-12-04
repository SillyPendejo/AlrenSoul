import React, { ChangeEvent } from 'react'
import cls from 'classnames'

import { HtmlInputProps } from '~types'

export interface ITextInputProps extends Omit<HtmlInputProps, 'className' | 'value' | 'ref' | 'onChange'> {
  className?: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<ITextInputProps> = props => {
  const { className, value, onChange, ...rest } = props
  return <input type={'text'} className={cls('!bg-transparent', className)} value={value} onChange={onChange} {...rest} />
}

export default TextInput
