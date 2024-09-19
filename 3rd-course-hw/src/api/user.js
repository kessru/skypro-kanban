const apiURL = 'https://wedev-api.sky.pro/api/user'

export const signIn = async ({ login, password }) => {
    const response = fetch(`${apiURL}/login`, {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
    })

    if ((await response).status === 400) {
        throw new Error('Введен неверный логин или пароль')
    }

    if (!(await response).ok) {
        throw new Error('Ошибка, попробуйте позже')
    }

    const data = (await response).json()
    return data
}

export const signUp = async ({ login, password, name }) => {
    const response = fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    })

    if ((await response).status === 400) {
        throw new Error('Имя пользователя занято')
    }

    if (!(await response).ok) {
        throw new Error('Ошибка, попробуйте позже')
    }

    const data = (await response).json()
    return data
}
