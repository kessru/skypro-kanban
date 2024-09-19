import { Link, useNavigate } from 'react-router-dom'
import * as S from './registrationPage.styled.js'
import { routes } from '../../router/routes.js'
import { useState } from 'react'
import { signUp } from '../../api/user.js'

export const RegistrationPage = ({ setUser }) => {
    const [signUpData, setSignUpData] = useState({
        login: '',
        name: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()

    const handleRegistration = (e) => {
        e.preventDefault()

        if (!signUpData.login || !signUpData.password || !signUpData.name) {
            setErrorMessage('Введите данные')
            return
        }

        signUp(signUpData)
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
        <S.WrapperRegister>
            <S.ContainerRegister>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <h2>Регистрация</h2>
                        </S.ModalTtl>
                        <S.ModalFormRegister
                            onSubmit={handleRegistration}
                            id="formLogUp"
                            action="#"
                        >
                            <S.ModalInput
                                onChange={(e) =>
                                    setSignUpData({
                                        ...signUpData,
                                        name: e.target.value,
                                    })
                                }
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder="Имя"
                            />
                            <S.ModalInput
                                onChange={(e) =>
                                    setSignUpData({
                                        ...signUpData,
                                        login: e.target.value,
                                    })
                                }
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                            />
                            <S.ModalInput
                                onChange={(e) =>
                                    setSignUpData({
                                        ...signUpData,
                                        password: e.target.value,
                                    })
                                }
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                            />
                            {errorMessage && (
                                <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
                            )}
                            <S.ModalBtnEnter type="submit" id="SignUpEnter">
                                Зарегистрироваться{' '}
                            </S.ModalBtnEnter>
                            <S.ModalFormGroup>
                                <p>
                                    Уже есть аккаунт?{' '}
                                    <Link to={routes.login}>Войдите здесь</Link>
                                </p>
                            </S.ModalFormGroup>
                        </S.ModalFormRegister>
                    </S.ModalBlock>
                </S.Modal>
            </S.ContainerRegister>
        </S.WrapperRegister>
    )
}
