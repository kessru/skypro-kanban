const apiURL = 'https://wedev-api.sky.pro/api/kanban'

export const getTasks = async (token) => {
    const response = fetch(apiURL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    const data = (await response).json()

    if (!(await response).ok) {
        throw new Error('Error')
    }

    return data
}
 