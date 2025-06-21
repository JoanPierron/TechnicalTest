import type { CollectionConfig } from 'payload'

export const Telephone: CollectionConfig = {
  slug: 'telephone',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'marque',
      type: 'text',
      required: true,
    },
    {
      name: 'imei',
      type: 'text',
      required: true,
    },
    {
      name: 'nom',
      type: 'text',
      required: true,
    },
    {
      name: 'couleur',
      type: 'select',
      options: ['Rouge', 'Vert', 'Bleu'],
      required: true,
    },
    {
      name: 'capacite',
      type: 'number',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, req, operation }) => {
        const capacite = data.capacite;
        if (typeof capacite !== 'number' || capacite <= 0 || capacite % 2 !== 0) {
          throw new Error('La capacité doit être un multiple de 2 et supérieure à zéro.');
        }
      }
    ],
  },
}
