//create an Interfaces

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
