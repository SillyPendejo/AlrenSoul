import React, { useCallback, useMemo, useState } from 'react'
import Icon from '~svg'
import cls from 'classnames'

export interface IdPageStatProps {
  initialValue: number
  name: 'СИЛ' | 'ЛОВ' | 'ИНТ' | 'ХАР' | 'ВЫН'
}

const IdPageStat: React.FC<IdPageStatProps> = props => {
  const { initialValue, name } = props
  const [value, setValue] = useState(initialValue)

  const handleLevelUp = () => {
    if (value > 5) return
    setValue(value + 1)
  }

  const handleLevelDown = () => {
    if (value < 1) return
    setValue(value - 1)
  }

  const diceColor = useMemo(
    () => ({
      'text-emerald-500': value === 0 || value === 1,
      'text-sky-500': value === 2,
      'text-violet-500': value === 3,
      'text-fuchsia-500': value === 4,
      'text-pink-500': value === 5,
      '': value === 6
    }),
    [value]
  )

  const dice = useCallback(() => {
    switch (value) {
      case 0:
      case 1:
        return 'D4'
      case 2:
        return 'D6'
      case 3:
        return 'D8'
      case 4:
        return 'D10'
      case 5:
        return 'D12'
      case 6:
        return 'D20'
      default:
        return 'D4'
    }
  }, [value])

  const renderZeroLevelModifier = useCallback(() => {
    if (value > 0) return

    return <p className={'absolute top-0 -right-2 text-red-500 font-semibold select-none'}>-2</p>
  }, [value])

  return (
    <div className={'flex items-center gap-5 transition ease-in'}>
      <div className={'flex flex-col justify-center'}>
        {/* <p className={'text-xl text-white font-bold cursor-pointer select-none'} onClick={handleLevelUp}>
          +
        </p> */}
        <Icon
          className={cls('w-5 h-5 text-slate-500 transform -rotate-90 cursor-pointer', {
            'hover:(scale-big -rotate-90 text-emerald-500) active:(text-emerald-800)': value < 6,
            'hover:(scale-big -rotate-90 text-fuchsia-500) active:(text-fuchsia-400)': value === 6
          })}
          icon="Arrow"
          onClick={handleLevelUp}
        />
        <Icon
          className={cls('w-5 h-5 text-slate-500 text-white transform rotate-90', {
            'hover:(scale-big rotate-90 text-red-500) cursor-pointer active:(text-red-800)': value > 0,
            'hover:(rotate-90) cursor-not-allowed': value === 0
          })}
          icon="Arrow"
          onClick={handleLevelDown}
        />
      </div>
      <div className={'text-xl text-white font-semibold select-none w-12'}>{name}</div>
      <div className={'text-2xl text-white font-semibold select-none w-4'}>{value}</div>
      <div className={'flex items-center gap-3'}>
        {/* <span className={'text-white text-xl font-bold'}>d</span> */}
        <div className={'relative'}>
          {renderZeroLevelModifier()}
          <Icon className={cls('w-9 h-9', diceColor)} icon={dice()} />
        </div>
      </div>
    </div>
  )
}

export default IdPageStat
