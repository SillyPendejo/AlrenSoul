import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const EnergyCircle: React.FC<IIconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg className={cls('fill-none', className)} xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 22 22'} {...rest}>
      <path
        d="M8.32586 20.3259C13.4764 21.8027 18.849 18.8247 20.3259 13.6741C21.8027 8.52362 18.8247 3.15104 13.6742 1.67415M8.32586 20.3259C3.17533 18.849 0.197261 13.4764 1.67415 8.32586C3.15104 3.17533 8.52362 0.197256 13.6742 1.67415M8.32586 20.3259C8.32586 20.3259 3.26854 13.3247 11 11C18.7315 8.67527 13.6742 1.67415 13.6742 1.67415"
        stroke="#3B82F6"
        stroke-width="2.5"
      />
    </svg>
  )
}

export default memo(EnergyCircle)
