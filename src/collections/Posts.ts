import Bahman from 'components/Bahman'
import { CollectionConfig } from 'payload/types'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'Title',
    description: "Do not turn off your computer"
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'Title',
              type: 'text',
            },
            {
              name: 'Podcast',
              type: 'checkbox',
            },
            {
              name: 'Bahman',
              type: 'json',
              admin: {
                components: { Field: Bahman },
              },
            },
          ],
        },
        {
          label: 'Layout',
          fields: [
            {
              name: 'Year',
              type: 'number',
              min: 1900,
              max: 2100,
            },
          ],
        },
      ],
    },
  ],
}
