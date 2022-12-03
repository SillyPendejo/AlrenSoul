import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCharacter } from '~hooks'

export interface IListAddNewCharacterProps {
  onAddCharacter: () => string
}

const ListAddNewCharacter: React.FC<IListAddNewCharacterProps> = props => {
  const { onAddCharacter } = props
  const navigate = useNavigate()

  const handleClick = () => {
    onAddCharacter()
  }
  return (
    <div className={'w-100 text-lg text-emerald-500 cursor-pointer hover:(scale)'} onClick={handleClick}>
      Добавить нового персонажа +
    </div>
  )
}

export default ListAddNewCharacter
