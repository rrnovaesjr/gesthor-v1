
export interface RestAPIService {

    post?: Function[];

    put?: Function[];

    get?: { url: string, callback: (req, res, next) => void}[];

    delete?: Function[];

}