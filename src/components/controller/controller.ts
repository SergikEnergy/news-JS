import AppLoader from './appLoader';
import { IGetArticlesView, Callback, IGetAllSources } from '../../types/index';

// interface CallbackFunc<T1, T2 = void> {
//     (argument1?: T1): T2;
// }
class AppController extends AppLoader {
    getSources(callback: Callback<IGetAllSources>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback<IGetArticlesView>) {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}
export default AppController;
