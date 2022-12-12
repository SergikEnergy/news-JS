import AppLoader from './appLoader';
import { IGetArticlesView, IGetAllSources } from '../../types/index';

interface CallbackFunc<T1, T2 = void> {
    (argument1?: T1): T2;
}
class AppController extends AppLoader {
    getSources(callback: CallbackFunc<IGetArticlesView | IGetAllSources>) {
        super.getResp({ endpoint: 'sources' }, callback);
    }

    getNews(e: PointerEvent, callback: CallbackFunc<IGetArticlesView | IGetAllSources>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId) {
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
            }
            if (target instanceof HTMLElement) {
                target = target.parentNode as HTMLElement;
            }
        }
    }
}

export default AppController;
