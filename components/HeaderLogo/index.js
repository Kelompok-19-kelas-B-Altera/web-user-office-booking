import Link from 'next/link'
import React from 'react'
import Search from '../SearchFeature/Search'

export default function HeaderLogo({ query, setQuery, setQueryPicked, buildings }) {
  return (
    <header className="w-full flex justify-between">
      <Search
        setQuery={setQuery}
        query={query}
        setQueryPicked={setQueryPicked}
        buildings={buildings}
      />
      <Link href="/">
        <a>
          <img src="/officity-logo.svg" alt="logo" className='hover:cursor-pointer' />
        </a>
      </Link>
    </header>
  );
}
