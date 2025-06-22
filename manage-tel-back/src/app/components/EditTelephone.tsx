'use client'

import React, { useState } from 'react'

interface Telephone {
  id: string
  marque: string
  nom: string
  imei: string
  couleur?: string
  capacite?: number
}

interface Props {
  initialData: Telephone
}

export default function EditTelephoneForm({ initialData }: Props) {
  const [formData, setFormData] = useState({
    marque: initialData.marque || '',
    nom: initialData.nom || '',
    imei: initialData.imei || '',
    couleur: initialData.couleur || '',
    capacite: initialData.capacite?.toString() || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const dataToSend = {
      ...formData,
      capacite: parseInt(formData.capacite, 10) || 0,
    }

    try {
      const res = await fetch(`/api/telephones/${initialData.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      })
      const json = await res.json()
      if (json.success) {
        alert('Téléphone mis à jour avec succès.')
      } else {
        alert('Erreur: ' + json.error)
      }
    } catch {
      alert('Erreur lors de la mise à jour.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}
    >
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        Marque:
        <input name="marque" value={formData.marque} onChange={handleChange} />
      </label>

      <label style={{ display: 'flex', flexDirection: 'column' }}>
        Nom:
        <input name="nom" value={formData.nom} onChange={handleChange} />
      </label>

      <label style={{ display: 'flex', flexDirection: 'column' }}>
        IMEI:
        <input name="imei" value={formData.imei} onChange={handleChange} />
      </label>

      <label style={{ display: 'flex', flexDirection: 'column' }}>
        Couleur:
        <select name="couleur" value={formData.couleur} onChange={handleChange}>
          <option value="">-- Choisir --</option>
          <option value="Rouge">Rouge</option>
          <option value="Vert">Vert</option>
          <option value="Bleu">Bleu</option>
        </select>
      </label>

      <label style={{ display: 'flex', flexDirection: 'column' }}>
        Capacité (Go):
        <input name="capacite" type="number" value={formData.capacite} onChange={handleChange} />
      </label>

      <button type="submit" style={{ height: '32px', alignSelf: 'flex-end' }}>
        Sauvegarder
      </button>
    </form>
  )
}
