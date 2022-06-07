import React, {FormEventHandler, useState} from 'react';
import logo from './logo.svg';
import './Auth.css';
import {Link} from 'react-router-dom'


const Auth = () => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const submit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let request = {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({login: login, password: password})
        }


    }

    return (
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
                                       value={login} onChange={(event => {setLogin(event.target.value);})}
                                />
                            </div>
                            <div className="input-form">
                                <p>
                                    Пароль
                                </p>
                                <input className="input-frame" placeholder="Введите пароль" type="password"
                                    value={password} onChange={(event => {setPassword(event.target.value);})}
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
    );
}

export default Auth;