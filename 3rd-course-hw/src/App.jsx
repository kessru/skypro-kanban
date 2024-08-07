import './App.css'
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { cardList } from './data';
// import { PopBrowse } from "./component/popups/PopBrowse";
// import { PopUser } from "./component/popups/PopUser";
// import { PopNewCard } from "./component/popups/PopNewCard";


function App() {
  const [cards, setCards] = useState(cardList)
  const [isLoading, setIsLoading] = useState(false)

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      topic: "Research",
      title: "Новая задача",
      date: "27.10.23",
      status: "Без статуса",
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
    <div className="wrapper">

      <Header addCard={addCard} />
      {isLoading ? <p className='loader'>Данные загружаются</p> : <Main cards={cards} />}
    </div>
  )
}

export default App
