//create an Interfaces and types

export interface ISourceResponse {
    readonly id: string;
    name: string;
    [key: string]: string;
}
export interface IAllSources {
    status: string;
    sources: ISourceResponse[];
}

export interface IRequestData {
    readonly apiKey: string;
    category: string;
    language: string;
    country: string;
}
export interface IArticleContent {
    source: {
        id: string;
        name: string;
    };
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
}
export interface ISourceContent {
    category: string;
    country: string;
    description: string;
    readonly id: string;
    language: string;
    name: string;
    url: string;
    [keys: string]: string;
}

export interface IGetArticlesView {
    status: string;
    totalResults: number;
    articles: IArticleContent[];
}
export type Callback<T> = (data?: T) => void;

export type Link = {
    endpoint: string;
    options?: {
        sources: string;
    };
};
export type IGetAllSources = {
    sources: ISourceContent[];
    status: string;
};

export const AlphabetArr: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];
