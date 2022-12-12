import News from './news/news';
import Sources from './sources/sources';
import { IGetAllSources, IGetArticlesView } from '../../types/index';

export class AppView {
    news: News;
    public sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IGetArticlesView) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IGetAllSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
