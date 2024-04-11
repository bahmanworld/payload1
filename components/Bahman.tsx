'use client'
import React from 'react'
import { useField } from '@payloadcms/ui/forms/useField'
import { Button, TextField } from '@mui/material'
import { Unstable_NumberInput as NumberInput } from '@mui/base'

type ValueProps = {
  name: string
  age: number
}

function Bahman() {
  const { value, setValue } = useField<ValueProps>({})
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [name, setName] = React.useState(value.name || '')
  const [age, setAge] = React.useState(value.age + '' || '0')

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
        <TextField
          label="Name"
          ref={inputRef}
          value={name}
          sx={{ flex: 1 }}
          onChange={(e) => {
            setName(e.target.value)
            setValue({ ...value, name: e.target.value } as ValueProps)
          }}
        />
        <NumberInput
          value={+age}
          onChange={(e,val) => {
            setAge(''+val)
            setValue({ ...value, age: val } as ValueProps)
          }}
        />
        <Button
          variant="contained"
          tabIndex={0}
          style={{ marginTop: 25 }}
          type="button"
          onClick={() => {
            setName('')
            setAge('')
            inputRef.current?.focus()
          }}
        >
          Use Default Values
        </Button>
      </div>
    </div>
  )
}

export default Bahman
