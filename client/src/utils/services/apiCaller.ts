function apiCaller<T>(
    method: 'POST' | 'GET',
    path: string,
    data?: any,
    addAuthToken?: boolean,
): Promise<T[] | any> {
    const headers = addAuthToken
        ? {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          }
        : {
              'Content-Type': 'application/json',
              Accept: 'application/json',
          }

    return fetch(`${process.env.BASE_URL}${path}`, {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
    })
        .then((response) => response.json())
        .catch((reason) => reason)
}

export default apiCaller
