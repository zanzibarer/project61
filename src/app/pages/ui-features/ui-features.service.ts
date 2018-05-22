import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  UiFeaturesService{

    constructor(private http: Http) { }
    setData() {
        const url = 'http://localhost:5001/write';
        this.http.request(url).subscribe();
    }

    connectFirebase() {
        const url = 'https://scraping-db.firebaseio.com/Static.json';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        ).toPromise();
    }
}
