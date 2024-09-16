import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../router/routes.js'
import * as S from './loginPage.styled.js'
import { useState } from 'react'
import { signIn } from '../../api/user.js'

export const LoginPage = ({ setUser }) => {
    const [loginData, setLoginData] = useState({
        login: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (!loginData.login || !loginData.password) {
            setErrorMessage('Введите данные')
            return
        }

        signIn(loginData)
            .then((res) => {
                setUser(res.user)
                navigate(routes.main)
            })
            .catch((error) => {
                console.log(error.message)
                setErrorMessage(error.message)
            })
    }

    return (
        <S.WrapperLogin>
            <S.ContainerLogin>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <h2>Вход</h2>
                        </S.ModalTtl>
                        <S.ModalFormLogin
                            onSubmit={handleLogin}
                            id="formLogIn"
                            action="#"
                        >
                            <S.ModalInput
                                onChange={(e) =>
                                    setLoginData({
                                        ...loginData,
                                        login: e.target.value,
                                    })
                                }
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                            />
                            <S.ModalInput
                                onChange={(e) =>
                                    setLoginData({
                                        ...loginData,
                                        password: e.target.value,
                                    })
                                }
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />
                            {errorMessage && (
                                <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
                            )}
                            <S.ModalBtnEnter type="submit" id="btnEnter">
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
