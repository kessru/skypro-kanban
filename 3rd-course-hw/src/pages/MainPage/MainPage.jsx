import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { cardList } from '../../data'
import { LoaderStyle, WrapperStyle } from '../../components/Global.styled.js'
import { Outlet } from 'react-router-dom'

export const MainPage = ({ setSwitchTheme, switchTheme}) => {
    const [cards, setCards] = useState(cardList)
    const [isLoading, setIsLoading] = useState(false)

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
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

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
            ) : (
                <Main cards={cards} />
            )}
        </WrapperStyle>
    )
}
