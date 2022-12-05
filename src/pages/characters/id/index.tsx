import React from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '~components'
import { useCharacter } from '~hooks'
import { CharacterText } from './components'

export interface ICharactersIdPageProps {}

const CharactersIdPage: React.FC<ICharactersIdPageProps> = () => {
  const params = useParams<{ characterId: string }>()
  const { characterId } = params

  if (!characterId) return null

  const { getCharacter } = useCharacter()

  const character = getCharacter(characterId)

  if (!character)
    return <div className={'text-3xl font-semibold text-white ml-10 mt-10'}>Не найден персонаж с таким id :(</div>

  const { id, name, race } = character

  return (
    <Page className={'p-10'}>
      <div className={'flex gap-10'}>
        <CharacterText
          className={'text-white text-3xl font-bold w-fit'}
          characterId={id}
          initialValue={name}
          valueKey={'name'}
          label={'Имя'}
        />
        <CharacterText
          className={'text-white text-3xl font-bold w-fit'}
          characterId={id}
          initialValue={race}
          valueKey={'race'}
          label={'Раса'}
        />
      </div>
    </Page>
  )
}

export default CharactersIdPage
