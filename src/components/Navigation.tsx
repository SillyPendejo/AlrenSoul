import React from 'react'

import { Link } from 'react-router-dom'
import { uuid } from '~utils/index'

const navigation = [
  {
    name: 'Список персонажей',
    path: 'character-list'
  }
]

const Navigation = () => {
  return (
    <div className={'p-6 flex flex-col h-screen border-2 border-emerald-500 rounded gap-10 text-xl bg-black'}>
      {navigation.map(item => {
        const { name, path } = item
        return (
          <Link key={path} className={'no-underline hover:(scale)'} to={path} title={name}>
            <p className={'text-white font-bold'}>{name}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Navigation
