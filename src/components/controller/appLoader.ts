import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5b0d1731bf114953b47f015bb155a954', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
