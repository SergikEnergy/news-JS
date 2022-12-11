import './sources.css';
import { ISourceContent } from '../../../types/index';

class Sources {
    draw(data: ISourceContent[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                (sourceClone.querySelector('.source__item-name') as HTMLDivElement).textContent = item.name;
                (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            });

            (document.querySelector('.sources') as HTMLDivElement).append(fragment);
        }
    }
}

export default Sources;
