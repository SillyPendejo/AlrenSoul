import React, { useCallback, useMemo, useState } from 'react'
import Icon from '~svg'
import cls from 'classnames'

import { Character } from '~types'
import { useCharacter } from '~hooks'

export interface IdPageStatProps {
  characterId: string
  armor: number
  maxArmor: number
}

const IdPageArmor: React.FC<IdPageStatProps> = props => {
  const { characterId, armor, maxArmor } = props
  const { setCharacterField } = useCharacter()
  const [currentArmor, setCurrentArmor] = useState(armor)
  const [currentMaxArmor, setCurrentMaxArmor] = useState(maxArmor)
  const [edit, setEdit] = useState(false)

  const handleEditToggle = () => setEdit(!edit)

  const handleEditStart = () => setEdit(true)

  const handleEditEnd = () => setEdit(false)

  const handleMaxArmorUp = () => {
    setCurrentMaxArmor(currentMaxArmor + 1)
    setCharacterField(characterId, currentMaxArmor + 1, 'maxArmor')
    if (currentMaxArmor + 1 > currentArmor) {
      setCurrentArmor(currentMaxArmor + 1)
      setCharacterField(characterId, currentMaxArmor + 1, 'armor')
    }
  }

  const handleMaxArmorDown = () => {
    setCurrentMaxArmor(currentMaxArmor - 1)
    setCharacterField(characterId, currentMaxArmor - 1, 'maxArmor')
    if (currentMaxArmor - 1 < currentArmor) {
      setCurrentArmor(currentMaxArmor - 1)
      setCharacterField(characterId, currentMaxArmor - 1, 'armor')
    }
  }

  const handleArmorUp = () => {
    if (currentArmor + 1 > currentMaxArmor) return
    setCurrentArmor(currentArmor + 1)
    setCharacterField(characterId, currentArmor + 1, 'armor')
  }

  const handleArmorDown = () => {
    setCurrentArmor(currentArmor - 1)
    setCharacterField(characterId, currentArmor - 1, 'armor')
  }

  const handleArrowUp = edit ? handleMaxArmorUp : handleArmorUp

  const handleArrowDown = edit ? handleMaxArmorDown : handleArmorDown

  return (
    <div>
      <div className={'flex items-center mb-3'}>
        <p className={'text-lg text-neutral-400 select-none mr-2'}>Порог</p>
        <Icon
          className={
            'text-neutral-400 cursor-pointer h-6 w-6 transition-all ease-in hover:(scale-bigg) active:(text-neutral-500)'
          }
          icon={edit ? 'ToggleOn' : 'ToggleOff'}
          onClick={handleEditToggle}
        />
      </div>
      <div className={'flex items-center transition ease-in'}>
        <div className={'flex flex-col justify-center mr-2'}>
          <Icon
            className={cls(
              'w-5 h-5 text-slate-500 transform -rotate-90 cursor-pointer hover:(scale-big -rotate-90 text-emerald-500) active:(text-emerald-800)'
            )}
            icon="Arrow"
            onClick={handleArrowUp}
          />
          <Icon
            className={cls('w-5 h-5 text-slate-500 text-white transform rotate-90', {
              'hover:(scale-big rotate-90 text-red-500) cursor-pointer active:(text-red-800)': currentArmor > 0,
              'hover:(rotate-90) cursor-not-allowed': currentArmor === 0
            })}
            icon="Arrow"
            onClick={handleArrowDown}
          />
        </div>
        <p
          className={cls('text-3xl text-center text-white font-semibold select-none w-10 mr-1 cursor-pointer', {
            'text-gray-600': edit
          })}
          onClick={handleEditEnd}
        >
          {currentArmor}
        </p>
        <span className={'mr-3 text-3xl text-white font-semibold select-none text-gray-600'}>/</span>
        <div
          className={cls('text-3xl text-white font-semibold select-none w-10 cursor-pointer', {
            'text-gray-600': !edit
          })}
          onClick={handleEditStart}
        >
          {currentMaxArmor}
        </div>
        <Icon className={'w-10 h-10 text-teal-500'} icon={'Armor'} />
      </div>
    </div>
  )
}

export default IdPageArmor
