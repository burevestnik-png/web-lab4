import * as React from 'react'
import { useCallback, useState } from 'react'

export const useFormInput = (initialValue: string = '') => {
    const [value, setValue] = useState(initialValue)
    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
        [],
    )

    return { value, onChange }
}
