import { Column } from '../Column'
// import React, { useState } from "react";
import { statusList } from '../../data'
import * as S from './main.styled.js'
import { ContainerStyle } from '../Global.styled.js'

export const Main = ({ cards }) => {
    return (
        <S.Main>
            <ContainerStyle>
                <S.MainBlock>
                    <S.MainContent>
                        {statusList.map((status, i) => (
                            <Column
                                key={i}
                                title={status}
                                cards={cards.filter(
                                    (card) => card.status === status,
                                )}
                            />
                        ))}
                    </S.MainContent>
                </S.MainBlock>
            </ContainerStyle>
        </S.Main>
    )
}
