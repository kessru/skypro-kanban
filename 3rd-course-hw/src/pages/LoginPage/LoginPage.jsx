import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../router/routes.js'
import * as S from './loginPage.styled.js'

export const LoginPage = ({ setIsAuth }) => {
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setIsAuth(true)
        navigate(routes.main)
    }

    return (
        <S.WrapperLogin>
            <S.ContainerLogin>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <h2>Вход</h2>
                        </S.ModalTtl>
                        <S.ModalFormLogin id="formLogIn" action="#">
                            <S.ModalInput
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />
                            <S.ModalBtnEnter
                                onClick={handleLogin}
                                id="btnEnter"
                            >
                                Войти
                            </S.ModalBtnEnter>
                            <S.ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={routes.registration}>
                                    Регистрируйтесь здесь
                                </Link>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.ContainerLogin>
        </S.WrapperLogin>
    )
}
