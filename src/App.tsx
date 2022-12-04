import React, { useState } from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom'

import { default as MainRouter } from './pages'
import { default as Navigation } from './components/Navigation'

const App = () => {
  return (
    <BrowserRouter>
      <div className={'flex flex-1 w-100vw bg-middleworld'}>
        <Navigation />
        <main className={'w-80wv flex flex-1'}>
          <MainRouter />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
