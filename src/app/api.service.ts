import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import { CreateUserBody, FollowBody, LoginBody, SubscriptionBody } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private host = 'localhost:8080';
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
        return this.http.get(`${this.host}/getMonthlyBill?user_id=${user_id}`);
  }

  public getFollowedPairsLeft(user_id: string) {
        return this.http.get(`${this.host}/getFollowedPairsLeft?user_id=${user_id}`);
  }

  public getPairsFollowed(user_id: string) {
        return this.http.get(`${this.host}/getPairsFollowed?user_id=${user_id}`);
  }

  public getHistoricalData(currency_pair: string, granularity: string, from_time: Moment, to_time: Moment) {
        // Format Query String
        let queryString = `?currency_pair=${currency_pair}` + 
                `&time_frame_granularity=${granularity}` +
                `&from_time=${from_time.format('YYYY-MM-DD HH:mm:ss')}` + 
                `&to_time=${to_time.format('YYYY-MM-DD HH:mm:ss')}`;

        return this.http.get(`${this.host}/getHistoricalData${queryString}`);
  }
}
