import React, { useState } from "react";
import { ContainerStyle } from "../Global.styled.js";
import * as S from "./header.styled.js";
import * as M from "./popUserSet.styled.js";

export const Header = ({ addCard, switchTheme, setSwitchTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenUser = () => {
    setIsOpen(!isOpen);
  };

  const onSwitchTheme = () => {
    setSwitchTheme(switchTheme === "light" ? "dark" : "light");
  };

  return (
    <S.Header>
      <ContainerStyle>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img
                src={
                  switchTheme === "light"
                    ? "images/logo.png"
                    : "images/logo_dark.png"
                }
                alt="logo"
              />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnNew onClick={addCard}>
              <a>Создать новую задачу</a>
            </S.HeaderBtnNew>
            <S.HeaderUser onClick={toggleOpenUser}>Ivan Ivanov</S.HeaderUser>
            {isOpen && (
              <M.PopUserSetHeader id="user-set-target">
                {/* <!-- <a href="">x</a> --> */}
                <M.PopUserSetName>Ivan Ivanov</M.PopUserSetName>
                <M.PopUserSetMail>ivan.ivanov@gmail.com</M.PopUserSetMail>
                <M.PopUserSetTheme>
                  <p>Темная тема</p>
                  <M.ThemeCheckbox
                    checked={switchTheme === "dark"}
                    onClick={onSwitchTheme}
                    type="checkbox"
                    name="checkbox"
                  />
                </M.PopUserSetTheme>
                <M.PopUserSetButton type="button">
                  <a href="#popExit">Выйти</a>
                </M.PopUserSetButton>
              </M.PopUserSetHeader>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </ContainerStyle>
    </S.Header>
  );
};
