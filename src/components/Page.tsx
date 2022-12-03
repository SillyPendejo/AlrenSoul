import React from 'react'
import cls from 'classnames'

// types
import { Children, ClassName, HtmlDivProps } from '~types'

export interface IPageProps extends Omit<HtmlDivProps, 'className' | 'children'> {
  className?: ClassName
  children: Children
}

const Page: React.FC<IPageProps> = props => {
  const { className, children, ...rest } = props

  return (
    <>
      <section className={cls('container', className)} {...rest}>
        <>{children}</>
      </section>
    </>
  )
}

export default Page
