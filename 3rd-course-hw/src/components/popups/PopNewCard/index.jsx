import { Calendar } from '../../Calendar'
import * as S from './popNewCard.styled'
import * as N from '../../Global.styled'

export const PopNewCard = () => {
    return (
        <S.PopNewCard>
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                        <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm>
                                <S.FormNewBlock>
                                    <label
                                        htmlFor="formTitle"
                                        className="subttl"
                                    >
                                        Название задачи
                                    </label>
                                    <S.FormNewInput
                                        placeholder="Введите название задачи..."
                                        autofocus
                                    />
                                </S.FormNewBlock>
                                <S.FormNewBlock>
                                    <label
                                        htmlFor="textArea"
                                        className="subttl"
                                    >
                                        Описание задачи
                                    </label>
                                    <S.FormNewArea placeholder="Введите описание задачи..."></S.FormNewArea>
                                </S.FormNewBlock>
                            </S.PopNewCardForm>
                            <Calendar />
                        </S.PopNewCardWrap>
                        <S.Categories>
                            <N.CategoriesP>Категория</N.CategoriesP>
                            <N.CategoriesThemes>
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                                <div className="categories__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <div className="categories__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
                            </N.CategoriesThemes>
                        </S.Categories>
                        <S.ForNewCreate id="btnCreate">
                            Создать задачу
                        </S.ForNewCreate>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard>
    )
}
