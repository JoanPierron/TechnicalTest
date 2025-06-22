import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const payload = await getPayload({ config: configPromise })
  const id = params.id

  try {
    await payload.delete({
      collection: 'telephone',
      id,
    })

    return Response.json({ success: true }, { status: 200 })
  } catch (error: any) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const payload = await getPayload({ config: configPromise })
  const id = params.id
  const data = await req.json()

  try {
    const updated = await payload.update({
      collection: 'telephone',
      id,
      data,
    })

    return Response.json({ success: true, telephone: updated })
  } catch (error: any) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}