import { ProviderContext } from 'notistack'

export const showDefaultSnack = (message: string, snack: ProviderContext) => {
    if (message == null) return
    snack.enqueueSnackbar(message)
}

export const showErrorSnack = (message: string, snack: ProviderContext) => {
    if (message == null) return
    snack.enqueueSnackbar(message, {
        variant: 'error',
    })
}
