import AppController from '../controller/controller';
import { AppView } from '../view/appView';
// import { IGetArticlesView, IGetAllSources } from '../../types/index';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => {
                if (data) {
                    this.view.drawNews(data);
                    document.querySelectorAll('.news__meta-photo').forEach((index) => {
                        if ((index as HTMLElement).hasAttribute('style') === false) {
                            (index as HTMLElement).style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/3/3d/%D0%9D%D0%B5%D1%82_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.jpg')`;
                        }
                    });
                }
            })
        );
        this.controller.getSources((data) => {
            if (data) {
                this.view.drawSources(data);
            }
        });
    }
}

export default App;
