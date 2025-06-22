import configPromise from '@payload-config'
import { getPayload } from 'payload'
import ListeClient from './ListeClient'

export default async function ListePage() {
  const payload = await getPayload({ config: configPromise })
  const telephones = await payload.find({ collection: 'telephone' })

  const telephonesJSON = JSON.parse(JSON.stringify(telephones.docs)) 

  return (
    <div>
      <h1>Liste de tous mes téléphones</h1>
      <ListeClient telephonesInitial={telephonesJSON} />
    </div>
  )
}