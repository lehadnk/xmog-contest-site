import rest from 'rest';
import mime from 'rest/interceptor/mime';

class Client {
    constructor() {
        this.back_url = "http://185.17.9.43:9000";
        this.client = rest.wrap(mime);
    }

    get(url) {
        return this.client(this.back_url+url);
    }
}

export default Client;