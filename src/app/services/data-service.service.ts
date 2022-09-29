import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from './config.token';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private ecommUrl = '../../assets/e-comm-items.json';
  private studentsDataUrl = '../../assets/students.json';

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
    // @Inject(APP_CONFIG) private config: AppConfig // *NEEDS TO BE PASSED AS PARAMETER IN CONSTRUCTOR*
    console.log('ExperimentalLoggerService -> constructor -> config ', this.config.experimentalEnabled = false);
  }

  getEcommData() {
    return this.http.get(this.ecommUrl);
  }

  getStudentsData() {
    return this.http.get(this.studentsDataUrl);
  }

  log() {
    console.log(``)
  }
}
