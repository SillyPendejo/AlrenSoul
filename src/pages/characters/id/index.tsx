import React from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '~components'
import { useCharacter } from '~hooks'

export interface ICharactersIdPageProps {}

const charMock = {
  name: 'Кек'
}

const CharactersIdPage: React.FC<ICharactersIdPageProps> = () => {
  const params = useParams<{ characterId: string }>()
  const { characterId } = params

  if (!characterId) return null

  const { getCharacter } = useCharacter()

  const character = getCharacter(characterId)

  if (!character) return <div className={'text-3xl font-semibold text-white ml-10 mt-10'}>Не найден персонаж с таким id :(</div>

  return (
    <Page className={'p-10'}>
      <h2 className='text-white text-3xl font-bold'>{character.name}</h2>
    </Page>
  )
}

export default CharactersIdPage
