import configPromise from '@payload-config'
import { getPayload } from 'payload'
import EditTelephoneForm from '../../components/EditTelephone'

interface Params {
  params: { id: string }
}

export default async function EditPage({ params }: Params) {
  const payload = await getPayload({ config: configPromise })
  const telephone = await payload.findByID({
    collection: 'telephone',
    id: params.id,
  })

  return <EditTelephoneForm initialData={telephone} />
}
