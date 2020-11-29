import { ApiErrorResponse, ApiResponse, ApiStatus } from '@state/types'

export const checkResponseForErrors = (
    response: ApiResponse | any,
): ApiErrorResponse => {
    const status = response.status as ApiStatus
    if (!status) return null

    switch (status) {
        case '4R03':
            return {
                status,
                description: 'Пользователь с таким логином уже существует',
            }
    }
}
