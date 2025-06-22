import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const POST = async (req: Request) => {
  const payload = await getPayload({ config: configPromise })

  const body = await req.json()

  try {
    const newTelephone = await payload.create({
      collection: 'telephone',
      data: {
        marque: body.marque,
        imei: body.imei,
        nom: body.nom,
        couleur: body.couleur,
        capacite: parseInt(body.capacite, 10),
      },
    })

    return Response.json({ success: true, telephone: newTelephone })
  } catch (err: any) {
    console.error('[API ERROR]', err)
    return Response.json({
      success: false,
      error: err?.message || 'Une erreur inconnue est survenue',
    }, { status: 400 })
  }
}