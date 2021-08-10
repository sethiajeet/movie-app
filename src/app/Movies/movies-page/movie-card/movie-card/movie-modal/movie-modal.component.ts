import { MovieCardService } from '../../movie-card.service';
import { MovieCardModel } from '../../../MovieCard';
import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.css'],
  providers: [
    { provide: MatDialogRef, useValue: {} },
  ]
})

export class MovieModalComponent implements OnInit {


  @Input() public movieModal? : MovieCardModel;
  @Input() data?: String;
  @Input() public title: String = "Title";
  @Input() public content: String = "Content";
  @Input() public genres: String = "Genres";

  constructor(
    public dialogRef: MatDialogRef<MovieModalComponent>,
  ) { }

  ngOnInit(): void {
    console.log("movie Modal is " , this.movieModal);
    // this.title = this.movieModal?.title || "";
    // this.content = this.movieModal?.description || "";
    // this.genres = this.movieModal?.genres || "";
    
  }

  closeModal() {
    this.dialogRef.close();
  }

}
