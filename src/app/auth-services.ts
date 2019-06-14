export class AuthServices {
    loggedIn = false;
    dbJson = './assets/app.config.json';

    constructor() {}
    isAuthenticated() {

        if (this.loggedIn === true) {
            return true;
        } else {
        return false;
        }
    }

    login(name) {
        this.loggedIn = true;
        localStorage.setItem('TOKEN', name);

    }

     logout() {
        this.loggedIn = false;
     }
}
