import { ProviderContext } from 'notistack'

class SnackBarService {
    public static showDefaultSnack(message: string, snack: ProviderContext) {
        if (message == null) return
        snack.enqueueSnackbar(message)
    }

    public static showErrorSnack(message: string, snack: ProviderContext) {
        if (message == null) return
        snack.enqueueSnackbar(message, {
            variant: 'error',
        })
    }
}

export default SnackBarService
