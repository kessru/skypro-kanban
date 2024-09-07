import { useNavigate } from 'react-router-dom'
import { WrapperStyle } from '../../components/Global.styled'
import * as S from './notFoundPage.styled'
import { routes } from '../../router/routes'

export const NotFoundPage = () => {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate(routes.main)
    }

    return (
        <WrapperStyle>
            <S.ContainerNotFound>
                <S.ErrorTtl>404</S.ErrorTtl>
                <S.ErrorMsg>Ой! что-то сломалось</S.ErrorMsg>
                <S.BtnBox>
                    <S.RedirectBtn onClick={handleRedirect}>
                        Вернуться
                    </S.RedirectBtn>
                </S.BtnBox>
            </S.ContainerNotFound>
        </WrapperStyle>
    )
}
