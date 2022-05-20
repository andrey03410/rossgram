import React, {useState} from 'react';
import "../../components/registration/styles.css"
import {Link, Navigate} from "react-router-dom";
import Input from "../../components/common/Input";
import {ErrorType, RegistrationAPI} from "../../api/Registration";
import {checkRegex} from "../../utils/stringUtils";

//const SERVER_ERROR_RESPONSE_CODE = {VALIDATION : "VALIDATION_ERROR"}
//const FIELD_NAMES = {FIRSTNAME : "FIRSTNAME"}


const Registration: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [gender, setGender] = useState<string>("Мужской");
    const [lastName, setLastName] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [firstNameError, setFirstNameError] = useState(ErrorType.NONE)
    const [loginError, setLoginError] = useState(ErrorType.NONE)
    const [lastNameError, setLastNameError] = useState(ErrorType.NONE)
    const [nicknameError, setNicknameError] = useState(ErrorType.NONE)
    const [passwordError, setPasswordError] = useState(ErrorType.NONE)

    const [firstNameErrorText, setFirstNameErrorText] = useState<string[]>([])
    const [loginErrorText, setLoginErrorText] = useState<string[]>([])
    const [lastNameErrorText, setLastNameErrorText] = useState<string[]>([])
    const [nicknameErrorText, setNicknameErrorText] = useState<string[]>([])
    const [passwordErrorText, setPasswordErrorText] = useState<string[]>([])

    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)


    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isLoading) return
        setIsLoading(true)
        if (!(firstNameError || loginError || lastNameError || nicknameError || passwordError)) {
            RegistrationAPI.SingUP(lastName, firstName, login, password, gender)
                .then(response => {
                    if (response.status == 200) {
                        setIsDone(true)
                    } else {
                        setNicknameError(ErrorType.NICKNAME)
                        setNicknameErrorText([RegistrationAPI.getErrorText(ErrorType.NICKNAME, "")])
                        return response.json()
                    }
                })
        } else {
            alert("Ошибка")
        }
        setIsLoading(false)
    }

    const setTypoError = (val : string, setError : React.Dispatch<React.SetStateAction<ErrorType>>,
                          setErrorText : React.Dispatch<React.SetStateAction<string[]>>,
                          regex : RegExp, info : string = "") => {
        if (checkRegex(val, regex)) {
            setError(ErrorType.TYPO);
            setErrorText([RegistrationAPI.getErrorText(ErrorType.TYPO, info)])
        } else {
            setError(ErrorType.NONE);
            setErrorText([])
        }
    }
    if (isDone) {
        return <Navigate to={"/auth"}/>
    }
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
                            <Input
                                isBig={false}
                                title={"Имя"}
                                placeholder={"Введите имя"}
                                info={""}
                                textErrors={firstNameErrorText}
                                onChange={(event) => {
                                    setFirstName(event.target.value);
                                    setTypoError(event.target.value, setFirstNameError, setFirstNameErrorText, /[а-яА-Я]/)
                                }}/>
                            <Input isBig={false}
                                   placeholder={"Введите фамилию"}
                                   info={""}
                                   title = {"Введите фамилию"}
                                   textErrors={lastNameErrorText}
                                   onChange={(event) => {
                                setLastName(event.target.value);
                                setTypoError(event.target.value, setLastNameError, setLastNameErrorText, /[а-яА-Я]/)
                            }}/>
                        </div>
                        <Input isBig={true}
                               title={"Номер телефона / почта"}
                               placeholder={"Введите телефон или почту"}
                               info={"Например: kek@mail.ru или 79213332211"}
                               onChange={(event) => {
                                   setLogin(event.target.value);
                               }}/>
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
                    Шаг 2. </span>Придумайте <span className="tooltiptext">никнейм</span></p>
                        <p style={{fontSize: "14px", wordWrap: "break-word"}}>Он должен быть уникальным, содержать
                            латинские буквы, цифры и специальные символы</p>
                        <Input isBig={true}
                               title={"Никнейм"}
                               placeholder={"Введите никнейм"}
                               info={"Например: Name123"}
                               textErrors={nicknameErrorText}
                               onChange={(event) => {
                            setNickname(event.target.value);
                            setTypoError(event.target.value, setNicknameError, setNicknameErrorText,
                                /[a-zA-Z~'`!_@#№?$%^&*()=+<>|/\\.,:;\[\]{}\-0-9]/)
                        }}/>
                    </div>
                    <div className="step" style={{wordWrap: "break-word"}}>
                        <p style={{fontSize: '20px'}}> <span style={{fontWeight: "bold", color: "#34956d"}}>
                    Шаг 3. </span>Придумайте пароль</p>
                        <Input isBig={true}
                               title={"Пароль"}
                               placeholder={"Введите пароль"}
                               info={""}
                               textErrors={passwordErrorText}
                               onChange={(event) => {
                            setPassword(event.target.value);
                            setTypoError(event.target.value, setPasswordError, setPasswordErrorText,
                                /[a-zA-Z~'`!_@#№?$%^&*()=+<>|/\\.,:;\[\]{}\-0-9]/)
                        }}/>
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