
export class AuthorizationAPI {
    static LogIN(login: string, password: string):
        Promise<Response> {
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({login, password})
        }
        return fetch('', request)
    }
}