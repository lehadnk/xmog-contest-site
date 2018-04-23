import rest from 'rest';
import mime from 'rest/interceptor/mime';

class Client {
    constructor() {
        this.back_url = "http://52.88.164.238:9000";
        // this.back_url = "http://localhost:9000";
        this.client = rest.wrap(mime);
    }

    get(url) {
        return this.client(this.back_url+url);
    }
}

export default Client;