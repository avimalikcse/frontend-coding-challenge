export default class APIWrapper {
    headers: any
    constructor() {
        this.headers = {}; // to set custom headers/ or tokens
    }

    // to call get Request
    get(url: string) {
        return fetch(url).then(response => response.json()).catch(e=>console.log(e,'d'))
    }

    // to post request data
    post(url: string, data: any) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        return fetch(url, requestOptions).then(response => response.json()).then(data => data);
    }

}