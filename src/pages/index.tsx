import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate, RoutesProps } from 'react-router-dom'

import { default as CharactersPage } from './characters'

export interface IMainRouterProps extends RoutesProps {}

const MainRouter: React.FC<IMainRouterProps> = () => {
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
