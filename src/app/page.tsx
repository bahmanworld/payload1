import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <Link href={'/admin'}>Go to Admin Page</Link>
    </div>
  )
}

export default page
