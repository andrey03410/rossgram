import {ENDPOINTS} from "./endpoints";

export enum ErrorType {
    NONE,
    TYPO,
    NICKNAME
}

export class RegistrationAPI {
    static SingUP(firstname: string, lastname: string, login: string,
                  password: string, nickname: string, gender: string): Promise<Response> { //void
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({firstname, lastname, login, password, nickname, gender})
        }
        return fetch(ENDPOINTS.REGISTRATION.SIGN_UP, request)
    }

    static getErrorText(type: ErrorType, info: string) {
        switch (type) {
            case ErrorType.NONE:
                return info
            case ErrorType.TYPO:
                return "Неверно введены данные"
            case ErrorType.NICKNAME:
                return "Никнейм занят"
            default:
                return "Неизвестная ошибка"
        }
    }
}