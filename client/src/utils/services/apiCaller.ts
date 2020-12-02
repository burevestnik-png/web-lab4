const BASE_URL = 'http://localhost:8175/web4'

function apiCaller<T>(
    method: 'POST' | 'GET',
    path: string,
    data?: any,
): Promise<T[] | any> {
    return fetch(`${BASE_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    }).then((response) => response.json())
}

export default apiCaller
