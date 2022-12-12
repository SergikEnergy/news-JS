import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IGetArticlesView, IGetAllSources } from '../../types/index';

class App {
    controller: Appcontroller;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: MouseEvent) =>
            this.controller.getNews(e, (data: IGetArticlesView) => this.view.drawNews(data))
        );
        this.controller.getSources((data: IGetAllSources) => this.view.drawSources(data));
    }
}

export default App;
