import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical' // editor-import
import path from 'path'
import { buildConfig } from 'payload/config'
// import sharp from 'sharp'
import { fileURLToPath } from 'url'


import { Users } from './collections/Users'
import { Posts } from './collections/Posts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Posts, Users],
  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET as string,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI as string,
  }),
})
