import { Component } from '@angular/core';
import { NewsFeedService } from '../news-feed.service';
import { News } from './models/news';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles = [];

  constructor(private newsFeedService: NewsFeedService) {
    this.loadNews();
  }

  loadNews() {
    this.newsFeedService.getNews("top-headlines?country=za")
      .subscribe(news => {
        this.articles = news.articles;
        console.log(news);
        console.log('Break');
        
        // console.log(this.articles);
        
      })
  }
}
