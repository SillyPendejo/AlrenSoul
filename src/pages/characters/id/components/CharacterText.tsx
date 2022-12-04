import React, { ChangeEvent, useState } from 'react'
import cls from 'classnames'

import { TextInput } from '~components'
import Icon from '~svg'

export interface ICharacterTextProps {
  className: string
  characterId: string
  value: string
  valueKey: string
  label: string
}

const CharacterText: React.FC<ICharacterTextProps> = props => {
  const { className, characterId, value, label } = props
  const [edit, setEdit] = useState(false)
  const [textValue, setTextValue] = useState(value)

  const handleStartEdit = () => {
    setEdit(true)
  }

  const handleEndEdit = () => {
    setEdit(false)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event
    const { value } = currentTarget
    setTextValue(value)
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
          className={cls('max-w-160 h-12', { 'border-b-1 border-white': edit, 'select-none': !edit }, className)}
          value={textValue}
          disabled={!edit}
          onChange={handleChange}
        />
        <Icon
          className={cls('cursor-pointer text-emerald-500 h-8 w-8 ml-2 hover:(scale-big)', { 'hidden ': !edit })}
          icon={'Check'}
          onClick={handleEndEdit}
        />
      </div>
    </div>
  )
}

export default CharacterText
