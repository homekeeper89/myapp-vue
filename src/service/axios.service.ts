import axois, {AxiosInstance} from 'axios';

export default class AxiosService {
    public static readonly instance: AxiosInstance = axois.create({
        baseURL: 'http://localhost:8080',
    });
}
