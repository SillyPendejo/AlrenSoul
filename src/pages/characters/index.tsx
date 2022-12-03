import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { default as ListPage } from './list'
import { default as CharacterId } from './id'

export interface ICharactersPageProps {}

const CharactersPage: React.FC<ICharactersPageProps> = () => {
  return (
    <Routes>
      <Route path={'/'} element={<ListPage />} />
      <Route path={'/:characterId'} element={<CharacterId />} />
    </Routes>
  )
}

export default CharactersPage
