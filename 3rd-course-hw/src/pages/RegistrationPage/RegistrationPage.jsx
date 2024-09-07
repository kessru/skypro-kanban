import { Link, useNavigate } from 'react-router-dom'
import * as S from './registrationPage.styled.js'
import { routes } from '../../router/routes.js'

export const RegistrationPage = ({ setIsAuth }) => {
    const navigate = useNavigate()

    const handleRegistration = (e) => {
        e.preventDefault()
        setIsAuth(true)
        navigate(routes.main)
    }

    return (
        <S.WrapperRegister>
            <S.ContainerRegister>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <h2>Регистрация</h2>
                        </S.ModalTtl>
                        <S.ModalFormRegister id="formLogUp" action="#">
                            <S.ModalInput
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder="Имя"
                            />
                            <S.ModalInput
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                            />
                            <S.ModalBtnEnter
                                onClick={handleRegistration}
                                id="SignUpEnter"
                            >
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
