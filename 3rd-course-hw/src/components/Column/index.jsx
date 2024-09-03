import { Card } from "../Card";
import * as S from "./column.styled.js"

export const Column = ({ title, cards }) => {
    return (
        <S.MainColumn>
            <S.ColumnTtl>
                <p>{title}</p>
            </S.ColumnTtl>
            <S.Cards>
                {cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            title={card.title}
                            topic={card.topic}
                            date={card.date} />
                    )
                })}
            </S.Cards>
        </S.MainColumn>
    )
}