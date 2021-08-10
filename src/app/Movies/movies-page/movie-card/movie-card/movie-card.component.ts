import { MovieCardService } from './../movie-card.service';
import { MovieModalComponent } from './movie-modal/movie-modal.component';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieCardModel } from './../../MovieCard';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movieCard: MovieCardModel = {
    'title': 'sample title',
    'description': 'sampledescription',
    'genres': 'sam , sam , sam',
    'uuid': '028y21e'
  };
  

  public avatarUrl : string = "";
  public truncatedDescription: string = "";
  public imageUrl : string = "https://ui-avatars.com/api/?background=random";
  public avatar? : any;
  public data: String = 'coldrik';

  constructor(
    private httpClient: HttpClient,
    public matDialog: MatDialog,
    public movieCardService : MovieCardService,
  ) { }

  ngOnInit(): void {
    this.movieCardService.movieCard = this.movieCard;
    this.getImage(this.imageUrl);

    this.truncatedDescription = this.movieCard.description.slice(0 , 100);
    if(this.truncatedDescription != this.movieCard.description) this.truncatedDescription += '...';
  }

  getImage(imageUrl: string){
    this.avatar = this.httpClient.get(imageUrl);
    console.log("avatra is " , this.avatar);
  }

  openModal(){
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(MovieModalComponent , dialogConfig);
  }

  movieCardCopy() {
    return {...this.movieCard};
  }


}
