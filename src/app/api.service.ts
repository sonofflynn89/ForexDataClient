import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import { CreateUserBody, FollowBody, LoginBody, SubscriptionBody } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private host = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  public createUser(body: CreateUserBody) {
      return this.http.post(`${this.host}/createUser`, body);
  }

  public login(body: LoginBody) {
      return this.http.post(`${this.host}/login`, body);
  }

  public updateSubscription(body: SubscriptionBody) {
      return this.http.post(`${this.host}/updateSubscription`, body);
  }

  public followPair(body: FollowBody) {
      return this.http.post(`${this.host}/updateSubscription`, body);
  }

  public getMonthlyBill(user_id: string) {
      return this.http.post(`${this.host}/getMonthlyBill`, { user_id });
  }

  public getFollowedPairsLeft(user_id: string) {
      return this.http.post(`${this.host}/getFollowedPairsLeft`, { user_id });
  }

  public getPairsFollowed(user_id: string) {
      return this.http.post(`${this.host}/getPairsFollowed`, { user_id });
  }

  public getHistoricalData(currency_pair: string, time_frame_granularity: string, from_time: Moment, to_time: Moment) {
        // Format Query String
      let body = {
            currency_pair,
            time_frame_granularity,
            from_time: from_time.format('YYYY-MM-DD HH:mm:ss'),
            to_time: to_time.format('YYYY-MM-DD HH:mm:ss')
      };

      return this.http.post(`${this.host}/getHistoricalData`, body);
  }

  public getAvailablePairs() {
      return this.http.post(`${this.host}/getAvailablePairs`, {});
  }
}
