import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import { default as CharactersPage } from './characters'

const MainRouter = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (pathname === '/') navigate('/character-list')
  }, [pathname, navigate])

  return (
    <Routes>
      <Route path={'/character-list/*'} element={<CharactersPage />} />
    </Routes>
  )
}

export default MainRouter
