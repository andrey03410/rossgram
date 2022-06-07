
export class AddPostAPI {
    static AddPOST(image: string):
        Promise<Response> {
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({image})
        }
        return fetch('', request)
    }
}