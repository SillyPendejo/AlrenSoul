import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { Page } from '~components'
import { AddNewCharacter } from './components'

import { useCharacter } from '~hooks'

export interface ICharactersListPageProps {}

const CharactersListPage: React.FC<ICharactersListPageProps> = () => {
  const { characters, addCharacter } = useCharacter()

  const navigate = useNavigate()

  return (
    <Page className={'pt-3 pl-10 h-screen overflow-y-scroll'}>
      <div className={'w-full mt-5 flex text-lg flex-col gap-10 text-white mb-8'}>
        {characters.map(char => {
          const { id, name } = char

          return (
            <Link to={`/character-list/${id}`} className={'cursor-pointer no-underline text-white'} key={id}>
              <p>{name}</p>
            </Link>
          )
        })}
      </div>
      <AddNewCharacter onAddCharacter={addCharacter} />
    </Page>
  )
}

export default CharactersListPage
