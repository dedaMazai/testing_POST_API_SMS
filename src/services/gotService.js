export default class GotService {
    constructor() {
        this._apiBase = 'https://eventpacerstage.azurewebsites.net/api';
    }

    authTel = async (tel) => {
        const res = await fetch(`${this._apiBase}/auth/requestCode?phone=%2B${tel}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            }
        });

        if (!res.ok) {
          throw new Error(`Could not fetch ${this._apiBase}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }
    authCode = async (tel,cod) => {
        const res = await fetch(`${this._apiBase}/auth/login?phone=%2B${tel}&code=${cod}`, {
             method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            }
        });

        if (!res.ok) {
          throw new Error(`Could not fetch` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

}
