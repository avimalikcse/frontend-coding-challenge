export default class APIWrapper {
    headers: any
    constructor() {
        this.headers = {}; // to set custom headers/ or tokens
    }

    get(url: string) {
        return fetch(url).then(response => response.json()).then(data => data);
    }

    post(url: string, data: any) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        return fetch(url, requestOptions).then(response => response.json()).then(data => data);
    }

}