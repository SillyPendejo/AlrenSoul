import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const Arrow: React.FC<IIconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg className={cls('fill-current', className)} xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 48 48'} {...rest}>
      <path d="M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z" />
    </svg>
  )
}

export default memo(Arrow)
