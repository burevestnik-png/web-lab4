import { ApiErrorResponse, ApiResponse, ApiStatus } from '@state/types'

export const checkResponseForErrors = (
    response: ApiResponse | any,
): ApiErrorResponse => {
    const status = response.status as ApiStatus
    if (!status) return null

    switch (status) {
        case '4R00':
            return {
                status,
                description: 'Неверный ввод',
            }
        case '4R01':
            return {
                status,
                description: 'Такого пользователя не существует',
            }
        case '4R03':
            return {
                status,
                description: 'Пользователь с таким логином уже существует',
            }
        case '4R11':
            return {
                status,
                description: 'Был введен неверный пароль',
            }
        case '4R12':
            return {
                status,
                description: 'Время сессии истекло',
            }
        case '4R13':
            return {
                status,
                description:
                    'Попытка автоматической аутентификации провалилась, войдите в аккаунт заново',
            }
    }
}
