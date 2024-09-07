import { Link, useNavigate } from 'react-router-dom'
import * as S from './popUser.styled.js'
import { routes } from '../../../router/routes.js'

export const PopExit = (setIsAuth) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        setIsAuth(false)
        navigate(routes.login)
    }

    return (
        <S.PopExit id="popExit">
            <S.PopExitContainer>
                <S.PopExitBlock>
                    <S.PopExitTtl>
                        <h2>Выйти из аккаунта?</h2>
                    </S.PopExitTtl>
                    <form id="formExit" action="#">
                        <S.PopExitFormGroup>
                            <S.PopExitYes onClick={handleLogout}>
                                Да, выйти{' '}
                            </S.PopExitYes>
                            <S.PopExitNo id="exitNo">
                                <Link to={routes.main}>Нет, остаться</Link>{' '}
                            </S.PopExitNo>
                        </S.PopExitFormGroup>
                    </form>
                </S.PopExitBlock>
            </S.PopExitContainer>
        </S.PopExit>
    )
}
