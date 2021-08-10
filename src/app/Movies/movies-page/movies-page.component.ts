import { FilterPipe } from './filter.pipe';
import { MovieCardModel } from './MovieCard';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders , HttpClient } from '@angular/common/http';

export class MovieResponse{
  public count : Number = 10;
  public previous: string = "";
  public next: string = "";
  public results: MovieCardModel[] = [];
}

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})


export class MoviesPageComponent implements OnInit {


  token: string = JSON.parse(localStorage.getItem('currentUser') || '');
  public movieCardList: MovieCardModel[] = [];
  public nextPageUrl: String = "";
  public previousPageUrl: String = "";
  public currentPageUrl: String = 'https://demo.credy.in/api/v1/maya/movies/';
  public apiFailed : Boolean = false;
  public showSpinner : Boolean = true;
  public searchText: string = '';

  constructor(
    private httpClient: HttpClient,
  ) { }

  httpHeaders = new HttpHeaders({
    'Authorization': `Token ${this.token}`,
  });

  //'https://demo.credy.in/api/v1/maya/movies/'
  

  ngOnInit(): void {
    // get from the movies API
    this.loadPage(this.currentPageUrl);
    setTimeout(
      () => {this.showSpinner = false;},
      5000
    )
  }

  goToNextPage(): void{
    this.loadPage(this.nextPageUrl);
  }

  goToPreviousPage(): void{
    this.loadPage(this.previousPageUrl);
  }

  loadPage(url : String){
    if(url === '') url = this.currentPageUrl;
    else this.currentPageUrl = url || "";

    this.httpClient.get<MovieResponse>(`${url}` , {headers: this.httpHeaders}).subscribe(
      (response) => {
        console.warn(response);
        
        this.nextPageUrl = response.next ? response.next : "";
        this.previousPageUrl = response.previous ? response.previous : "";
        
        this.movieCardList = [];
        for(let i = 0 ; i < 10 ; ++i){
          this.movieCardList.push(response.results[i]);
        }
        console.log(this.movieCardList);
        console.log("Previous Page URL is " , this.previousPageUrl);
        this.apiFailed = false;
      },
      (error) =>{
        window.alert("Please reload the page !");
        this.apiFailed = true;
      }

    )
  }

  addItem(event: string){
    this.searchText = event;
  }


}
