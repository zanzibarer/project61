import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

    constructor(private http: Http) { }
    setData() {
        const url = 'http://localhost:5000/write';
        this.http.request(url).subscribe();
    }

    connectFirebase() {
        const url = 'https://scraping-db.firebaseio.com/JobThai.json';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        ).toPromise();
    }

    connectFirebase2() {
        const url = 'https://scraping-db.firebaseio.com/NSTDA.json';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        ).toPromise();
    }

    // connectFirebase3() {
    //     const url = 'https://scraping-db.firebaseio.com/JobBKK.json';
    //     return this.http.get(url).map(
    //         (res: Response) => {
    //             return res.json();
    //         }
    //     ).toPromise();
    // }

    connectFirebase4() {
        const url = 'https://scraping-db.firebaseio.com/JobThaiWeb.json';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        ).toPromise();
    }

    connectFirebase5() {
        const url = 'https://scraping-db.firebaseio.com/Pasona.json';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        ).toPromise();
    }

    connectFirebase6() {
        const url = 'https://scraping-db.firebaseio.com/JobSugoi.json';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        ).toPromise();
    }

    connectFirebase7() {
        const url = 'https://scraping-db.firebaseio.com/JobNorThthailand.json';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        ).toPromise();
    }

    connectFirebase8() {
        const url = 'https://scraping-db.firebaseio.com/ChiangraiFocus.json';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        ).toPromise();
    }

    connectFirebase9() {
        const url = 'https://scraping-db.firebaseio.com/Service.json';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        ).toPromise();
    }

    // connectFirebase10() {
    //     const url = 'https://scraping-db.firebaseio.com/Central.json';
    //     return this.http.get(url).map(
    //         (res: Response) => {
    //             return res.json();
    //         }
    //     ).toPromise();
    // }
}
