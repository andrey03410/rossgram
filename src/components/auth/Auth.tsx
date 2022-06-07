import React, {FormEventHandler, useState} from 'react';
import logo from './logo.svg';
import './Auth.css';
import {Navigate} from 'react-router-dom'
import {AuthorizationAPI} from "../../api/Authorization";


const Auth = () => {

    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isLoading) return
        setIsLoading(true)
        AuthorizationAPI.LogIN(login, password)
            .then(response => {
                if (response.status == 200) {
                    setIsDone(true)
                } else {
                    return response.json()
                }
            })
        setIsLoading(false)
    }

    if (isDone) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <form onSubmit={submit}>
            <div className="wrapper">
                <div className="main-container">
                    <div className="logo">
                        <img src={logo} alt="logo" className={"image-logo"}/>
                        <div className="logo-text">
                            *228*
                        </div>
                    </div>

                    <div className="frame">
                        <div className="text-auth">
                            Вход
                        </div>
                        <div className="form-auth">
                            <div className="inner-form-auth">
                                <div className="input-form">
                                    <p>
                                        Номер телефона / почта
                                    </p>
                                    <input className="input-frame" placeholder="Введите телефон или почту"
                                           value={login} onChange={(event => {
                                        setLogin(event.target.value);
                                    })}
                                    />
                                </div>
                                <div className="input-form">
                                    <p>
                                        Пароль
                                    </p>
                                    <input className="input-frame" placeholder="Введите пароль" type="password"
                                           value={password} onChange={(event => {
                                        setPassword(event.target.value);
                                    })}
                                    />
                                </div>
                            </div>
                            <button className="enter-button">Войти</button>
                            <div>
                                <label>
                                    Еще нет аккаунта?
                                </label>
                                <label>
                                    <a href="/registration">Зарегистрироваться</a>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Auth;