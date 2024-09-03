import "./App.css";
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { cardList } from "./data";
import {
  GlobalStyle,
  LoaderStyle,
  WrapperStyle,
} from "./components/Global.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme.js";
// import { PopBrowse } from "./component/popups/PopBrowse";
// import { PopUser } from "./component/popups/PopUser";
// import { PopNewCard } from "./component/popups/PopNewCard";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(false);
  const [switchTheme, setSwitchTheme] = useState("light");

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      topic: "Research",
      title: "Новая задача",
      date: "27.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={switchTheme === "light" ? light : dark}>
      <GlobalStyle />
      <WrapperStyle>
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
    </ThemeProvider>
  );
}

export default App;
