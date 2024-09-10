import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { MainPage } from '../pages/MainPage/MainPage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage'
import { ProtectedRoute } from './ProtectedRoute'
import { useState } from 'react'
import { ExitPage } from '../pages/ExitPage/ExitPage'
import { CardPage } from '../pages/CardPage/CardPage'

export const AppRoutes = ({ setSwitchTheme, switchTheme }) => {
    const [user, setUser] = useState(null)

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute user={user} />}>
                    <Route
                        path={routes.main}
                        element={
                            <MainPage
                                user={user}
                                switchTheme={switchTheme}
                                setSwitchTheme={setSwitchTheme}
                            />
                        }
                    >
                        <Route
                            path={routes.exit}
                            element={<ExitPage setUser={setUser} />}
                        />
                        <Route path={routes.card} element={<CardPage />} />
                    </Route>
                </Route>
                <Route
                    path={routes.login}
                    element={<LoginPage setUser={setUser} />}
                />

                <Route
                    path={routes.registration}
                    element={<RegistrationPage setUser={setUser} />}
                />

                <Route path={routes.notFound} element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}
