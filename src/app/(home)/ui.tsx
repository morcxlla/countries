'use client'

import React, { useEffect, useState } from 'react'
import { countries } from '@/data/countries'

import { Country } from '@/types/country'

export function UI() {
  // State for search input and results / Estado para la entrada de búsqueda y resultados
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [results, setResults] = useState<Country[]>([])

  // Effect to update results based on search term / Efecto para actualizar resultados basado en el término de búsqueda
  useEffect(() => {
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setResults(filteredCountries)
  }, [searchTerm])

  return (
    <div>
      <h1>Country Code Search</h1>
      {/* Search input / Entrada de búsqueda */}
      <input
        type="text"
        placeholder="Enter country name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {/* Render search results / Mostrar resultados de búsqueda */}
        {results.map((country, index) => (
          <li key={index}>
            {country.name} - {country.code2} - {country.code3}
          </li>
        ))}
      </ul>
    </div>
  )
}
