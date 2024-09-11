const apiURL = 'https://wedev-api.sky.pro/api/user/login'

export const signIn = async (login, password) => {
    const response = fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
    })

    if (response.status === 400) {
        throw new Error('Введен неверный логин или пароль')
    }

    if (!(await response).ok) {
        throw new Error('Error')
    }

    const data = (await response).json()
    return data
}
