//create an Interfaces and types

interface ISourceResponse {
    readonly id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
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
    author: 'string';
    content: 'string';
    description: 'string';
    publishedAt: 'string';
    source: {
        readonly id: 'string';
        name: 'string';
    };
    title: 'string';
    url: 'string';
    urlToImage: 'string';
}
export interface ISourceContent {
    category: 'string';
    country: 'string';
    description: 'string';
    readonly id: 'string';
    language: 'string';
    name: 'string';
    url: 'string';
}

export interface IGetArticlesView {
    articles: IArticleContent[];
    status: 'string';
    totalResults: 'number';
}
export interface IGetAllSources {
    sources: ISourceContent[];
    status: 'string';
}
