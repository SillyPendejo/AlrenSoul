import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const Check: React.FC<IIconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={'0 0 48 48'}
      {...rest}
    >
      <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"/>
    </svg>
  )
}

export default memo(Check)
