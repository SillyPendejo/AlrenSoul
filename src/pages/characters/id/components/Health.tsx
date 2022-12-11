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

const IdPageStat: React.FC<IdPageStatProps> = props => {
  const { characterId, health, maxHealth } = props
  const { setCharacterField } = useCharacter()
  const [currentHealth, setCurrentHealth] = useState(health)
  const [currentMaxHealth, setCurrentMaxHealth] = useState(maxHealth)
  const [edit, setEdit] = useState(false)

  const stars = [...Array(currentMaxHealth).keys()]

  const handleEditStart = () => setEdit(true)

  const handleEditEnd = () => setEdit(false)

  const handleMaxHealthUp = () => {
    setCurrentMaxHealth(currentMaxHealth + 1)
    setCharacterField(characterId, currentMaxHealth + 1, 'maxHealth')
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
    return stars.map((star, index) => {
      const isFull = index <= currentHealth - 1
      return <Icon className={cls('w-8 h-8 text-red-500')} icon={isFull ? 'Heart' : 'HeartEmpty'} />
    })
  }

  const renderMaxHealth = () => {
    if (!edit) return

    return (
      <>
        <div className={cls('text-3xl text-white font-semibold select-none w-15', { 'mr-3': edit })}>
          <span className={'opacity-30 mr-3'}>/</span>
          {currentMaxHealth}
        </div>
        <Icon
          className={cls('cursor-pointer text-emerald-500 h-8 w-8 mr-2 hover:(scale-big)', { 'hidden ': !edit })}
          icon={'Check'}
          onClick={handleEditEnd}
        />
      </>
    )
  }

  return (
    <div>
      <div className={'flex items-center mb-3'}>
        <p className={'text-lg text-neutral-400 select-none mr-1'}>Здоровье</p>
        <Icon
          className={
            'text-neutral-400 cursor-pointer h-4 w-4 mb-2 transition-all ease-in-out hover:(scale-big rotate-45) active:(text-neutral-500)'
          }
          icon={'Settings'}
          onClick={handleEditStart}
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
                ? currentMaxHealth > 0
                : currentHealth > 0,
              'hover:(rotate-90) cursor-not-allowed': edit ? currentMaxHealth === 0 : currentHealth === 0
            })}
            icon="Arrow"
            onClick={handleArrowDown}
          />
        </div>
        <p
          className={cls('text-3xl text-center text-white font-semibold select-none w-10', {
            'mr-3': !edit,
            'opacity-30 mr-1': edit
          })}
        >
          {currentHealth}
        </p>
        {renderMaxHealth()}
        <div className={'flex items-center gap-3'}>
          <div className={'relative flex items-center max-w-150'}>{renderHearts()}</div>
        </div>
      </div>
    </div>
  )
}

export default IdPageStat
