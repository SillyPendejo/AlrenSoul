import React, { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from 'react'
import { useCharacter } from '~hooks'
import cls from 'classnames'

import { TextInput } from '~components'
import Icon from '~svg'
import { Character } from '~types'
import { toNumber } from 'lodash'

export interface ICharacterTextProps {
  className: string
  characterId: string
  initialValue: string
  valueKey: keyof Character
  label: string
}

const CharacterText: React.FC<ICharacterTextProps> = props => {
  const { className, characterId, initialValue, valueKey, label } = props
  const [edit, setEdit] = useState(false)
  const [textValue, setTextValue] = useState(initialValue)
  const inputRef = useRef<HTMLInputElement>(null)

  const { setCharacterField, getCharacter } = useCharacter()

  useEffect(() => {
    if (inputRef.current && edit) {
      inputRef.current.focus()
    }
  }, [inputRef.current, edit])

  const handleStartEdit = () => {
    setEdit(true)
  }

  const handleEndEdit = () => {
    setCharacterField(characterId, textValue, valueKey)
    setEdit(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault()
        handleEndEdit()
        break
      case 'Escape':
        event.preventDefault()
        const resetValue = getCharacter(characterId)?.[valueKey] ?? initialValue
        setEdit(false)
        if (typeof resetValue === 'string') {
          setTextValue(resetValue)
        } else if (typeof resetValue === 'number') {
          setTextValue(resetValue.toString())
        }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event
    const { value } = currentTarget
    setTextValue(value)
  }

  const renderText = () => {
    if (edit) {
      return (
        <>
          <TextInput
            className={cls('w-50 h-12 border-b-1 border-white mt-0.5', className)}
            value={textValue}
            inputRef={inputRef}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
          <Icon
            className={cls('cursor-pointer text-emerald-500 h-8 w-8 ml-2 hover:(scale-big)', { 'hidden ': !edit })}
            icon={'Check'}
            onClick={handleEndEdit}
          />
        </>
      )
    }
    return
  }

  return (
    <div className={'flex flex-col items-start w-fit'}>
      <div className={'flex items-center'}>
        <p className={'text-lg text-white select-none'}>{label}</p>
        <div className={'p-2 cursor-pointer group'} onClick={handleStartEdit}>
          <Icon className={' text-white h-4 w-4 group-hover:(scale-big)'} icon={'Edit'} />
        </div>
      </div>
      <div className={cls('flex w-fit items-end')}>
        <TextInput
          className={cls('w-50 h-12 border-b-1 border-white mt-0.5', { 'hidden ': !edit }, className)}
          value={textValue}
          inputRef={inputRef}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <Icon
          className={cls('cursor-pointer text-emerald-500 h-8 w-8 ml-2 hover:(scale-big)', { 'hidden ': !edit })}
          icon={'Check'}
          onClick={handleEndEdit}
        />
        <p className={cls('max-w-160 h-12 mt-2 select-none', { 'hidden ': edit }, className)}>{textValue}</p>
      </div>
    </div>
  )
}

export default CharacterText
