import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd54cfce6b08f49178f117662527108f1', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
