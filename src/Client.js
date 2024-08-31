import rest from 'rest';
import mime from 'rest/interceptor/mime';

class Client {
    constructor() {
        // this.back_url = "http://92.53.77.158:9000";
        this.back_url = "http://localhost:9000";
        this.client = rest.wrap(mime);
    }

    get(url) {
        return this.client(this.back_url+url);
    }
}

export default Client;