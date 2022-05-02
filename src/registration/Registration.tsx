import React, {useState} from 'react';
import "./styles.css"
import {Link} from "react-router-dom";

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [login, setLogin] = useState("");
    const [gender, setGender] = useState("Мужской");
    const [lastName, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");

    function submit(){
        let request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: firstName })
        }
        fetch('https://reqres.in/api/posts', request)
            .then(response => response.json())
    }
    return (
        <form onSubmit={submit}>
            <div className="wrapper">
                <div className="form">
                    <div className="text-reg">
                        Регистрация
                    </div>
                    <div style={{textAlign: "center"}}>
                        <label>
                            Есть аккаунт?
                        </label>
                        <label><Link to="/auth" className="ref"> Войти</Link></label>
                    </div>

                    <div className="step">
                        <p style={{fontSize: '20px'}}> <span style={{fontWeight: "bold", color: "#34956d"}}>
                    Шаг 1. </span>Введите персональные данные</p>
                        <div className="inputs-form">
                            <div>
                                <label>
                                    <p>Имя</p>
                                    <input className="input small" placeholder="Введите имя" value={firstName} onChange={(event => {
                                        setFirstName(event.target.value);
                                    })}/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <p>Фамилия</p>
                                    <input className="input small" placeholder="Введите фамилию" value={lastName} onChange={(event => {
                                        setLastName(event.target.value);})}/>
                                </label>
                            </div>
                        </div>
                        <div style={{marginTop: "40px"}}>
                            <p>Номер телефона / почта</p>
                            <label>
                                <input className="input big" placeholder="Введите телефон или почту" value={login} onChange={(event => {
                                    setLogin(event.target.value);})}/>
                            </label>
                            <p>Например: kek@mail.ru или 79213332211</p>
                        </div>
                        <div style={{marginTop: "40px"}}>
                            <p>Пол</p>
                            <label>
                                <select className="input small" value={gender} onChange={event => {
                                    setGender(event.target.value);
                                }}>
                                    <option>Мужской</option>
                                    <option>Женский</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="step" style={{wordWrap: "break-word"}}>
                        <p style={{fontSize: "20px"}}> <span style={{fontWeight: "bold", color: "#34956d"}}>
                    Шаг 2. </span>Придумайте никнейм</p>
                        <p style={{fontSize: "14px", wordWrap: "break-word"}}>Он должен быть уникальным, содержать латинские
                            буквы, цифры
                            и специальные символы</p>
                        <div style={{marginTop: "40px"}}>
                            <p>Никнейм</p>
                            <label>
                                <input className="input big" placeholder="Введите никнейм" value={nickname} onChange={(event => {
                                    setNickname(event.target.value);})}/>
                            </label>
                            <p>Например: Name123</p>
                        </div>
                    </div>
                    <div className="step" style={{wordWrap: "break-word"}}>
                        <p style={{fontSize: '20px'}}> <span style={{fontWeight: "bold", color: "#34956d"}}>
                    Шаг 3. </span>Придумайте пароль</p>
                        <div style={{marginTop: "40px"}}>
                            <p>Пароль</p>
                            <label>
                                <input className="input big" placeholder="Введите пароль" type="password"
                                       value={password} onChange={(event => {
                                    setPassword(event.target.value);})}/>
                            </label>
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button className="reg-button">Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Registration;