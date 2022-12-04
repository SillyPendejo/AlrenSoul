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
    <>
      <div className={'p-6 flex flex-col h-screen bg-teal-900 bg-opacity-10 gap-10 text-xl '}>
        {navigation.map(item => {
          const { name, path } = item
          return (
            <Link key={path} className={'no-underline hover:(scale)'} to={path} title={name}>
              <p className={'text-white font-semibold'}>{name}</p>
            </Link>
          )
        })}
        <a
          className={'no-underline hover:(scale)'}
          href={'https://docs.google.com/document/d/1vkRXUlUhQfK_n9pQ8-XV-Uf3BXWyCKDN'}
          title={'Рулбук'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={'text-white font-semibold'}>Рулбук</p>
        </a>
      </div>
      <div className={'w-0.5 h-screen bg-gradient-to-t from-violet-900 via-teal-600 to-teal-900'}></div>
    </>
  )
}

export default Navigation
