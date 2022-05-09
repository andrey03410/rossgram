import React, {useState} from 'react';
import "./styles.css"
import {Link, Navigate} from "react-router-dom";
import Input, {ErrorType} from "./Input";

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [login, setLogin] = useState("");
    const [gender, setGender] = useState("Мужской");
    const [lastName, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState(ErrorType.NONE)
    const [loginError, setLoginError] = useState(ErrorType.NONE)
    const [lastNameError, setLastNameError] = useState(ErrorType.NONE)
    const [nicknameError, setNicknameError] = useState(ErrorType.NONE)
    const [passwordError, setPasswordError] = useState(ErrorType.NONE)

    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)

    const submit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(isLoading) return
        setIsLoading(true)
        let request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'},
            body: JSON.stringify({ firstname: firstName, lastname: lastName, login: login,
            password: password, gender: gender})
        }
        if(!(firstNameError || loginError || lastNameError || nicknameError || passwordError)){
            fetch('https://run.mocky.io/v3/d7575389-4d60-49c5-8be7-a79dd207361a', request)
                .then(response => {
                    if(response.status == 400){
                        setNicknameError(ErrorType.NICKNAME)
                    } else {
                        setIsDone(true)
                    }
                })
        }
        else {
            alert("Ошибка")
        }
        setIsLoading(false)
    }
    function check(str : string, regexp : RegExp) : boolean{
        let regex = /[а-я,А-Я]/;
        for(let i = 0; i < str.length; ++i){
            if(!regexp.exec(str[i])){
                return true
            }
        }
        return false
    }
    if(isDone) return <Navigate to={"/auth"}/>
    return (
        <form onSubmit={submit}>
            <div className="wrapper">
                <div className="form">
                    <div className="text-reg">
                        Регистрация
                    </div>
                    <div style={{textAlign: "center"}}>
                            Есть аккаунт?
                        <label><Link to="/auth" className="ref"> Войти</Link></label>
                    </div>
                    <div className="step">
                        <p style={{fontSize: '20px'}}> <span style={{fontWeight: "bold", color: "#34956d"}}>
                    Шаг 1. </span>Введите персональные данные</p>
                        <div className="inputs-form">
                            <Input isBig={false} errorType={firstNameError} val={firstName} title={"Имя"}
                                   placeholder={"Введите имя"} info={""} onChange={(event) => {
                                       setFirstName(event.target.value);
                                       if(check(event.target.value, /[а-яА-Я]/)){
                                           setFirstNameError(ErrorType.TYPO);
                                       }
                                       else {
                                           setFirstNameError(ErrorType.NONE);
                                       }
                            }}/>
                            <Input isBig={false} errorType={lastNameError} val={lastName} title={"Фамилия"}
                                   placeholder={"Введите фамилию"} info={""} onChange={(event) => {
                                setLastName(event.target.value);
                                if(check(event.target.value, /[а-яА-Я]/)){
                                    setLastNameError(ErrorType.TYPO);
                                }
                                else {
                                    setLastNameError(ErrorType.NONE);
                                }
                            }} />
                        </div>
                        <Input isBig={true} errorType={0} val={login} title={"Номер телефона / почта"}
                               placeholder={"Введите телефон или почту"} info={"Например: kek@mail.ru или 79213332211"}
                               onChange={(event) => {
                                   setLogin(event.target.value);
                               }} />
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
                    <div className="step">
                        <p style={{fontSize: "20px"}}> <span style={{fontWeight: "bold", color: "#34956d"}}>
                    Шаг 2. </span>Придумайте никнейм</p>
                        <p style={{fontSize: "14px", wordWrap: "break-word"}}>Он должен быть уникальным, содержать
                            латинские буквы, цифры и специальные символы</p>
                        <Input isBig={true} errorType={nicknameError} val={nickname} title={"Никнейм"}
                               placeholder={"Введите никнейм"} info={"Например: Name123"} onChange={(event) => {
                            setNickname(event.target.value);
                            if(check(event.target.value, /[a-zA-Z~'`!_@#№?$%^&*()=+<>|/\\.,:;\[\]{}\-0-9]/)){
                                setNicknameError(ErrorType.TYPO);
                            }
                            else {
                                setNicknameError(ErrorType.NONE);
                            }
                        }} />
                    </div>
                    <div className="step" style={{wordWrap: "break-word"}}>
                        <p style={{fontSize: '20px'}}> <span style={{fontWeight: "bold", color: "#34956d"}}>
                    Шаг 3. </span>Придумайте пароль</p>
                        <Input isBig={true} errorType={passwordError} val={password} title={"Пароль"}
                               placeholder={"Введите пароль"} info={""} onChange={(event) => {
                            setPassword(event.target.value);
                            if(check(event.target.value, /[a-zA-Z~'`!_@#№?$%^&*()=+<>|/\\.,:;\[\]{}\-0-9]/)){
                                setPasswordError(ErrorType.TYPO);
                            }
                            else {
                                setPasswordError(ErrorType.NONE);
                            }
                        }} />
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