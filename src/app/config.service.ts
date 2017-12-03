import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

const API_URL = environment.apiUrl;

@Injectable()
export class ConfigService {
    constructor(private httpClient: HttpClient) {}

    getConfigurartion() {
        return this.httpClient.get(API_URL + '/flow/ae');
    }
}
