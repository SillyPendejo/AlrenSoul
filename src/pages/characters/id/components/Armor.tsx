import React, { useCallback, useMemo, useState } from 'react'
import Icon from '~svg'
import cls from 'classnames'

import { Character } from '~types'
import { useCharacter } from '~hooks'

export interface IdPageStatProps {
  characterId: string
  armor: number
}

const IdPageStat: React.FC<IdPageStatProps> = props => {
  const { characterId, armor } = props
  const { setCharacterField } = useCharacter()
  const [currentArmor, setCurrentArmor] = useState(armor)

  const handleHealthUp = () => {
    setCurrentArmor(currentArmor + 1)
    setCharacterField(characterId, currentArmor + 1, 'armor')
  }

  const handleHealthDown = () => {
    if (currentArmor < 1) return
    setCurrentArmor(currentArmor - 1)
    setCharacterField(characterId, currentArmor - 1, 'armor')
  }

  return (
    <div>
      <p className={'text-lg text-neutral-400 select-none mb-3'}>Порог</p>
      <div className={'flex items-center transition ease-in'}>
        <div className={'flex flex-col justify-center mr-2'}>
          <Icon
            className={cls(
              'w-5 h-5 text-slate-500 transform -rotate-90 cursor-pointer hover:(scale-big -rotate-90 text-emerald-500) active:(text-emerald-800)'
            )}
            icon="Arrow"
            onClick={handleHealthUp}
          />
          <Icon
            className={cls('w-5 h-5 text-slate-500 text-white transform rotate-90', {
              'hover:(scale-big rotate-90 text-red-500) cursor-pointer active:(text-red-800)': currentArmor > 0,
              'hover:(rotate-90) cursor-not-allowed': currentArmor === 0
            })}
            icon="Arrow"
            onClick={handleHealthDown}
          />
        </div>
        <p className={'text-3xl text-white text-center font-semibold select-none w-10 mr-1'}>{currentArmor}</p>
        <Icon className={'w-10 h-10 text-teal-500'} icon={'Armor'} />
      </div>
    </div>
  )
}

export default IdPageStat
