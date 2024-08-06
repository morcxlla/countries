'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { countries } from '@/data/countries'

import { Country } from '@/types/country'
import { siteConfig } from '@/config/site'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export function UI() {
  // State for search input and results
  // Estado para la entrada de búsqueda y resultados
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [results, setResults] = useState<Country[]>([])

  // Effect to update results based on search term
  // Efecto para actualizar resultados basado en el término de búsqueda
  useEffect(() => {
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setResults(filteredCountries)
  }, [searchTerm])

  return (
    <main className="space-y-6 py-12 container">
      <h1 className="font-extrabold text-3xl tracking-tighter">
        Country Code Search
      </h1>
      <Input
        type="text"
        placeholder="Enter country name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="font-mono">
        {results.map((country, index) => (
          <li key={index}>
            <span className="text-lg select-all">{country.name}</span> -{' '}
            <Badge className="select-all" variant="outline">
              {country.code2}
            </Badge>{' '}
            <Badge className="select-all" variant="secondary">
              {country.code3}
            </Badge>
          </li>
        ))}
      </ul>

      <div className="right-4 text-right bottom-4 fixed font-mono text-xs">
        <p>
          <Link className="underline underline-offset-2" href={siteConfig.src}>
            Source Code
          </Link>
        </p>
        <p>
          <Link
            className="underline underline-offset-2"
            href={`${siteConfig.src}/issues/new`}
          >
            Report issue
          </Link>
        </p>
      </div>
    </main>
  )
}
