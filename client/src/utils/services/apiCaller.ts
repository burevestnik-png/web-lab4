function apiCaller<T>(
    method: 'POST' | 'GET',
    path: string,
    data?: any,
): Promise<T[] | any> {
    return fetch(`${process.env.BASE_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    }).then((response) => response.json())
}

export default apiCaller
