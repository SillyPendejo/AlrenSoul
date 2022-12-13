import React, { useCallback, useMemo, useState } from 'react'
import Icon from '~svg'
import cls from 'classnames'

import { Character } from '~types'
import { useCharacter } from '~hooks'

export interface IdPageStatProps {
  characterId: string
  energy: number
  maxEnergy: number
}

const IdPageEnergy: React.FC<IdPageStatProps> = props => {
  const { characterId, energy, maxEnergy } = props
  const { setCharacterField } = useCharacter()
  const [currentEnergy, setCurrentEnergy] = useState(energy)
  const [currentMaxEnergy, setCurrentMaxEnergy] = useState(maxEnergy)
  const [edit, setEdit] = useState(false)

  const orbs = [...Array(currentMaxEnergy).keys()]

  const handleEditToggle = () => setEdit(!edit)

  const handleEditStart = () => setEdit(true)

  const handleEditEnd = () => setEdit(false)

  const handleMaxEnergyUp = () => {
    setCurrentMaxEnergy(currentMaxEnergy + 1)
    setCharacterField(characterId, currentMaxEnergy + 1, 'maxEnergy')
    if (currentMaxEnergy + 1 > currentEnergy) {
      setCurrentEnergy(currentMaxEnergy + 1)
      setCharacterField(characterId, currentMaxEnergy + 1, 'energy')
    }
  }

  const handleMaxEnergyDown = () => {
    if (currentMaxEnergy < 2) return
    setCurrentMaxEnergy(currentMaxEnergy - 1)
    setCharacterField(characterId, currentMaxEnergy - 1, 'maxEnergy')
    if (currentMaxEnergy - 1 < currentEnergy) {
      setCurrentEnergy(currentMaxEnergy - 1)
      setCharacterField(characterId, currentMaxEnergy - 1, 'energy')
    }
  }

  const handleEnergyUp = () => {
    if (currentEnergy === currentMaxEnergy) return
    setCurrentEnergy(currentEnergy + 1)
    setCharacterField(characterId, currentEnergy + 1, 'energy')
  }

  const handleEnergyDown = () => {
    if (currentEnergy < 1) return
    setCurrentEnergy(currentEnergy - 1)
    setCharacterField(characterId, currentEnergy - 1, 'energy')
  }

  const handleArrowUp = edit ? handleMaxEnergyUp : handleEnergyUp

  const handleArrowDown = edit ? handleMaxEnergyDown : handleEnergyDown

  const renderIcons = () => {
    return orbs.map((_, index) => {
      const isFull = index <= currentEnergy - 1
      return <Icon className={cls('w-8 h-8 transition-all ease-in duration-300')} icon={isFull ? 'Energy' : 'EnergyEmpty'} />
    })
  }

  return (
    <div>
      <div className={'flex items-center mb-3'}>
        <p className={'text-lg text-neutral-400 select-none mr-2'}>Ресурс</p>
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
            className={
              'w-5 h-5 text-slate-500 transform -rotate-90 cursor-pointer hover:(scale-big -rotate-90 text-emerald-500) active:(text-emerald-800)'
            }
            icon="Arrow"
            onClick={handleArrowUp}
          />
          <Icon
            className={cls('w-5 h-5 text-slate-500 text-white transform rotate-90', {
              'hover:(scale-big rotate-90 text-red-500) cursor-pointer active:(text-red-800)': edit
                ? currentMaxEnergy > 1
                : currentEnergy > 0,
              'hover:(rotate-90) cursor-not-allowed': edit ? currentMaxEnergy === 1 : currentEnergy === 0
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
          {currentEnergy}
        </p>
        <span className={'mr-3 text-3xl text-white font-semibold select-none text-gray-600'}>/</span>
        <div
          className={cls('text-3xl text-white font-semibold select-none w-10 mr-1 cursor-pointer', {
            'text-gray-600': !edit
          })}
          onClick={handleEditStart}
        >
          {currentMaxEnergy}
        </div>
        <div className={'relative flex items-center max-w-150 gap-2'}>{renderIcons()}</div>
      </div>
    </div>
  )
}

export default IdPageEnergy
