import './sources.css';
import { ISourceResponse, AlphabetArr } from '../../../types/index';

//create alphabet sort
const divForSymbols = document.createElement('div');
(divForSymbols as HTMLElement).classList.add('letters');
document.querySelector('.main')?.prepend(divForSymbols);

AlphabetArr.forEach((symbolElem: string) => {
    const divForLetter = document.createElement('div');
    divForLetter.classList.add('letter');
    divForLetter.innerHTML = symbolElem;
    document.querySelector('.letters')?.append(divForLetter);
});

class Sources {
    draw(data: ISourceResponse[]) {
        console.log(data);
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp instanceof HTMLTemplateElement) {
            document.querySelectorAll('.letter')?.forEach((lett) => {
                lett.addEventListener('click', () => {
                    const dataFilter = data.filter((elem) => elem.name[0] === lett.innerHTML);
                    if (dataFilter.length === 0) {
                        fragment.textContent = `This API doesn't contains ${lett.innerHTML}! Please, retry your choice!`;
                    } else {
                        dataFilter.forEach((item) => {
                            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                            (sourceClone.querySelector('.source__item-name') as HTMLDivElement).textContent = item.name;
                            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute(
                                'data-source-id',
                                item.id
                            );

                            fragment.append(sourceClone);
                        });
                    }

                    (document.querySelector('.sources') as HTMLDivElement).innerHTML = '';
                    (document.querySelector('.news') as HTMLDivElement).innerHTML = '';
                    document.querySelector('.sources')?.append(fragment);
                });
            });
        }
    }
}
export default Sources;
