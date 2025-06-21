import React from 'react'
import './ajouter.css'

export default async function AddPage() {

  return (
    <div className="ajouter">
      <h2>Formulaire de création de téléphone</h2>
      <form>
        <div className="form-group">
          <label htmlFor="marqueTel">Marque :</label>
          <input type="text" id="marqueTel" name="marqueTel" required />
        </div>
        <div className="form-group">
          <label htmlFor="codeIMEI">Code IMEI :</label>
          <input type="text" id="codeIMEI" name="codeIMEI" required />
        </div>
        <div className="form-group">
          <label htmlFor="nomTel">Nom</label>
          <input type="text" id="nomTel" name="nomTel" required />
        </div>
        <div className="form-group">
          <label htmlFor="nomTel">Couleur</label>
          <select id="couleurTel" name="couleurTel" required>
            <option value="rouge">Rouge</option>
            <option value="vert">Vert</option>
            <option value="bleu">Bleu</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capaciteTel">Capacite</label>
          <input type="text" id="capaciteTel" name="capaciteTel" required />
        </div>

        <button type="submit">Créer le téléphone</button>
      </form>
    </div>
  )
}
