'use client'

import React, { useState } from 'react'
import TelephoneItem from '../components/TelephoneItem'

interface Telephone {
  id: string
  marque: string
  nom: string
  imei: string
}

interface ListeClientProps {
  telephonesInitial: Telephone[]
}

export default function ListeClient({ telephonesInitial }: ListeClientProps) {
  const [telephones, setTelephones] = useState<Telephone[]>(telephonesInitial)

  const handleDeleted = (id: string) => {
    setTelephones((prev) => prev.filter((tel) => tel.id !== id))
  }

  return (
    <ul className="telephone-list">
      {telephones.map((tel) => (
        <TelephoneItem key={tel.id} tel={tel} onDeleted={handleDeleted} />
      ))}
    </ul>
  )
}
