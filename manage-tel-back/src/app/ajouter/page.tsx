'use client'

import React, { useState } from 'react'
import './ajouter.css'

export default function AddPage() {
  const [formData, setFormData] = useState({
    marque: '',
    imei: '',
    nom: '',
    couleur: 'Rouge',
    capacite: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      ...formData,
      capacite: Number(formData.capacite),
    }

    try {
      const res = await fetch('/api/telephones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await res.json()

      if (result.success) {
        alert('Téléphone ajouté avec succès !')
        setFormData({
          marque: '',
          imei: '',
          nom: '',
          couleur: 'Rouge',
          capacite: '',
        })
      } else {
        alert('Erreur : ' + result.error)
      }
    } catch (err) {
      console.error(err)
      alert("Erreur lors de l'envoi.")
    }
  }

  return (
    <div className="ajouter">
      <h2>Formulaire de création de téléphone</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="marque">Marque :</label>
          <input
            type="text"
            id="marque"
            name="marque"
            value={formData.marque}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imei">Code IMEI :</label>
          <input
            type="text"
            id="imei"
            name="imei"
            value={formData.imei}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="couleur">Couleur :</label>
          <select
            id="couleur"
            name="couleur"
            value={formData.couleur}
            onChange={handleChange}
            required
          >
            <option value="Rouge">Rouge</option>
            <option value="Vert">Vert</option>
            <option value="Bleu">Bleu</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacite">Capacité :</label>
          <input
            type="number"
            id="capacite"
            name="capacite"
            value={formData.capacite}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Créer le téléphone</button>
      </form>
    </div>
  )
}
