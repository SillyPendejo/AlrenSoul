import React, { useCallback, useMemo, useState } from 'react'
import Icon from '~svg'
import cls from 'classnames'

import { Character } from '~types'
import { useCharacter } from '~hooks'

export interface IdPageStatProps {
  characterId: string
  health: number
  maxHealth: number
}

const IdPageHealth: React.FC<IdPageStatProps> = props => {
  const { characterId, health, maxHealth } = props
  const { setCharacterField } = useCharacter()
  const [currentHealth, setCurrentHealth] = useState(health)
  const [currentMaxHealth, setCurrentMaxHealth] = useState(maxHealth)
  const [edit, setEdit] = useState(false)

  const hearts = [...Array(currentMaxHealth).keys()]

  const handleEditToggle = () => setEdit(!edit)

  const handleEditStart = () => setEdit(true)

  const handleEditEnd = () => setEdit(false)

  const handleMaxHealthUp = () => {
    setCurrentMaxHealth(currentMaxHealth + 1)
    setCharacterField(characterId, currentMaxHealth + 1, 'maxHealth')
    if (currentMaxHealth + 1 > currentHealth) {
      setCurrentHealth(currentMaxHealth + 1)
      setCharacterField(characterId, currentMaxHealth + 1, 'health')
    }
  }

  const handleMaxHealthDown = () => {
    if (currentMaxHealth < 2) return
    setCurrentMaxHealth(currentMaxHealth - 1)
    setCharacterField(characterId, currentMaxHealth - 1, 'maxHealth')
    if (currentMaxHealth - 1 < currentHealth) {
      setCurrentHealth(currentMaxHealth - 1)
      setCharacterField(characterId, currentMaxHealth - 1, 'health')
    }
  }

  const handleHealthUp = () => {
    if (currentHealth === currentMaxHealth) return
    setCurrentHealth(currentHealth + 1)
    setCharacterField(characterId, currentHealth + 1, 'health')
  }

  const handleHealthDown = () => {
    if (currentHealth < 1) return
    setCurrentHealth(currentHealth - 1)
    setCharacterField(characterId, currentHealth - 1, 'health')
  }

  const handleArrowUp = edit ? handleMaxHealthUp : handleHealthUp

  const handleArrowDown = edit ? handleMaxHealthDown : handleHealthDown

  const renderHearts = () => {
    return hearts.map((_, index) => {
      const isFull = index <= currentHealth - 1
      return <Icon className={cls('w-8 h-8 text-red-500')} icon={isFull ? 'Heart' : 'HeartEmpty'} />
    })
  }

  return (
    <div>
      <div className={'flex items-center mb-3'}>
        <p className={'text-lg text-neutral-400 select-none mr-2'}>Здоровье</p>
        <Icon
          className={
            'text-neutral-400 cursor-pointer h-6 w-6 transition-all ease-in hover:(scale-bigg) active:(text-neutral-500)'
          }
          icon={edit ? 'ToggleOn' : 'ToggleOff'}
          onClick={handleEditToggle}
        />
        {/* <Icon
          className={
            'text-neutral-400 cursor-pointer h-4 w-4 mb-2 transition-all ease-in-out hover:(scale-big rotate-45) active:(text-neutral-500)'
          }
          icon={'Settings'}
          onClick={handleEditStart}
        /> */}
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
                ? currentMaxHealth > 1
                : currentHealth > 0,
              'hover:(rotate-90) cursor-not-allowed': edit ? currentMaxHealth === 1 : currentHealth === 0
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
          {currentHealth}
        </p>
        <span className={'mr-3 text-3xl text-white font-semibold select-none text-gray-600'}>/</span>
        <div
          className={cls('text-3xl text-white font-semibold select-none w-10 mr-1 cursor-pointer', { 'text-gray-600': !edit })}
          onClick={handleEditStart}
        >
          {currentMaxHealth}
        </div>
        <div className={'flex items-center gap-3'}>
          <div className={'relative flex items-center max-w-150'}>{renderHearts()}</div>
        </div>
      </div>
    </div>
  )
}

export default IdPageHealth
