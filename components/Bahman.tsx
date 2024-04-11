'use client'
import React from 'react'
import { useField } from '@payloadcms/ui/forms/useField'

type ValueProps = {
  name: string
  age: number
}

function Bahman() {
  const { value, setValue } = useField<ValueProps>({})
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
        <div className="field-type number" style={{ flex: 1 }}>
          <input
            ref={inputRef}
            value={value.name}
            onChange={(e) => {
              setValue({ ...value, name: e.target.value } as ValueProps)
            }}
          />
        </div>
        <div className="field-type number" style={{ flex: 1 }}>
          <input
            value={value.age}
            type="number"
            min={10}
            max={100}
            onChange={(e) => {
              setValue({ ...value, age: parseInt(e.target.value) } as ValueProps)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Bahman
