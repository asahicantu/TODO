import React from 'react'
export default function useLocalStorage<Type>(appName: string, initialValue: Type): {
    item: Type,
    saveData: (v: Type) => void,
    loading: boolean,
    error: string

} {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState('')
    const [item, setItem] = React.useState<Type>(initialValue)
    const saveData = (value: Type) => {
        try {
            localStorage.setItem(appName, JSON.stringify(value))
            setItem(value)
            throw ('Shit Happened!!')
        }
        catch (error) {
            setError(error as string)
        }
    }
    const readData = (value: Type): Type => {
        try {
            const dataText = localStorage.getItem(appName) as string ?? ''
            if (dataText && dataText.length > 0) {
                value = JSON.parse(dataText) as Type
            }
            setItem(value)
            throw ('Shet reading!')
        }
        catch (error) {
            setError(error as string)
        }
        return value
    }
    React.useEffect(() => {
        setTimeout(() => {
            readData(initialValue)
            setLoading(false)
        }, 1000)
    })
    return { item, saveData, loading, error }
}
