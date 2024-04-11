import React from 'react'
import { useField } from '@payloadcms/ui/forms/useField'

function ColorField() {
  const { value, setValue } = useField({path: 'colorized'})
  return (
    <div>
      <button onClick={()=>{
        setValue({
            color: 'red',
            by: 'bahman'
        })
      }}>
        SetJSON
      </button>
    </div>
  )
}

export default ColorField
