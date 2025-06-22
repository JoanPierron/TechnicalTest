import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function InfoPage({ params }: any) {
  const payload = await getPayload({ config: configPromise })

  const telephone = await payload.findByID({
    collection: 'telephone',
    id: params.id,
  })

  return (
    <div>
      <h1>Informations du téléphone</h1>
      <p>Marque : {telephone.marque}</p>
      <p>Nom : {telephone.nom}</p>
      <p>IMEI : {telephone.imei}</p>
      <p>Couleur : {telephone.couleur}</p>
      <p>Capacité : {telephone.capacite}</p>
    </div>
  )
}
