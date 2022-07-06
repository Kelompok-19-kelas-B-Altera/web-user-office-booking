import React from 'react'
import Search from '../SearchFeature/Search'

export default function HeaderLogo() {
  return (
    <header className="w-full flex justify-between">
      <Search />
      <img src="/officity-logo.svg" alt="logo" />
    </header>
  )
}
