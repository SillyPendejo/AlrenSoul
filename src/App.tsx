import React, { useState } from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Icon from '~svg'

import { default as MainRouter } from './pages'
import { default as Navigation } from './components/Navigation'

const App = () => {
  return (
    <BrowserRouter>
      <div className={'flex flex-1 w-100vw bg-middleworld'}>
        <Navigation />
        <main className={'relative w-80wv flex flex-1'}>
          <Icon
            className={
              'z-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 text-teal-200 opacity-5'
            }
            icon={'Altren'}
          />
          <div className={'w-full z-2'}>
            <MainRouter />
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
