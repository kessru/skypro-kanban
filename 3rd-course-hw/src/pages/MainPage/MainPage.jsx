import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { LoaderStyle, WrapperStyle } from '../../components/Global.styled.js'
import { Outlet } from 'react-router-dom'
import { getTasks } from '../../api/tasks.js'

export const MainPage = ({ setSwitchTheme, switchTheme, user }) => {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const addCard = () => {
        const newCard = {
            id: cards.length + 1,
            topic: 'Research',
            title: 'Новая задача',
            date: '27.10.23',
            status: 'Без статуса',
        }
        setCards([...cards, newCard])
    }

    useEffect(() => {
        setIsLoading(true)

        getTasks(user.token)
            .then((res) => {
                setCards(res.tasks)
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [user.token])

    return (
        <WrapperStyle>
            <Outlet />
            <Header
                addCard={addCard}
                setSwitchTheme={setSwitchTheme}
                switchTheme={switchTheme}
            />
            {isLoading ? (
                <LoaderStyle>Данные загружаются</LoaderStyle>
            ) : errorMessage ? (
                <p>{errorMessage}</p>
            ) : (
                <Main cards={cards} />
            )}
        </WrapperStyle>
    )
}
