import React from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '~components'
import { useCharacter } from '~hooks'
import Icon from '~svg'
import { CharacterText, Stat } from './components'

export interface ICharactersIdPageProps {}

const CharactersIdPage: React.FC<ICharactersIdPageProps> = () => {
  const params = useParams<{ characterId: string }>()
  const { characterId } = params

  if (!characterId) return null

  const { getCharacter } = useCharacter()

  const character = getCharacter(characterId)

  if (!character)
    return <div className={'text-3xl font-semibold text-white ml-10 mt-10'}>Не найден персонаж с таким id :(</div>

  const { id, name, race, strength, dexterity, intelligence, charisma, endurance } = character

  return (
    <Page className={'p-10 h-screen w-full overflow-y-scroll'}>
      <div className={'flex gap-10'}>
        <CharacterText
          className={'text-white text-2xl font-semibold w-fit'}
          characterId={id}
          initialValue={name}
          valueKey={'name'}
          label={'Имя'}
        />
        <CharacterText
          className={'text-white text-2xl font-semibold w-fit'}
          characterId={id}
          initialValue={race}
          valueKey={'race'}
          label={'Раса'}
        />
      </div>
      <div className={'mt-5 text-xl tracking-wider text-neutral-400 select-none'}>Характеристики</div>
      <div className={'flex flex-col gap-5 pt-6'}>
        <Stat name={'СИЛ'} characterId={id} initialValue={strength} valueKey={'strength'} />
        <Stat name={'ЛОВ'} characterId={id} initialValue={dexterity} valueKey={'dexterity'}/>
        <Stat name={'ИНТ'} characterId={id} initialValue={intelligence} valueKey={'intelligence'}/>
        <Stat name={'ХАР'} characterId={id} initialValue={charisma} valueKey={'charisma'}/>
        <Stat name={'ВЫН'} characterId={id} initialValue={endurance} valueKey={'endurance'}/>
      </div>
    </Page>
  )
}

export default CharactersIdPage
