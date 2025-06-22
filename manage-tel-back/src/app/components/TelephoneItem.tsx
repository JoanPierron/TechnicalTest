'use client'

import React from 'react'
import Link from 'next/link'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import './TelephoneItem.css'

interface Telephone {
  id: string
  marque: string
  nom: string
  imei: string
}

interface TelephoneItemProps {
  tel: Telephone
  onDeleted: (id: string) => void
}

export default function TelephoneItem({ tel, onDeleted }: TelephoneItemProps) {
  const handleDelete = async () => {
    if (!confirm(`Voulez-vous vraiment supprimer ${tel.marque} - ${tel.nom} ?`)) return

    try {
      const res = await fetch(`/api/telephones/${tel.id}`, { method: 'DELETE' })
      const json = await res.json()
      if (json.success) {
        onDeleted(tel.id)
      } else {
        alert('Erreur lors de la suppression : ' + json.error)
      }
    } catch {
      alert('Erreur lors de la suppression.')
    }
  }

  return (
    <li className="telephone-item">
        <div className="telephone-info">
            Marque : {tel.marque} - Nom : {tel.nom} - IMEI : {tel.imei}
        </div>
        <Link href={`/info/${tel.id}`} aria-label="Voir" title="Voir" className="btn icon-btn">
            <FaEye />
        </Link>
        <Link href={`/edit/${tel.id}`} aria-label="Éditer" title="Éditer" className="btn icon-btn">
            <FaEdit />
        </Link>
        <button className="btn icon-btn" aria-label="Supprimer" title="Supprimer" onClick={handleDelete}>
            <FaTrash />
        </button>
    </li>
  )
}
