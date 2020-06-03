import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { News } from './home/models/news';

const API_Key = environment.API_Key;
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private http: HttpClient) { }

  getNews(url) {
    return this.http.get<News>(`${API_URL}/${url}&apiKey=${API_Key}`);
  }
}
