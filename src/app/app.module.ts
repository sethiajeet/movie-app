import { FilterPipe } from './Movies/movies-page/filter.pipe';
import { SearchBarComponent } from 'src/app/Movies/movies-page/search-bar/search-bar/search-bar.component';
import { MovieModalComponent } from './Movies/movies-page/movie-card/movie-card/movie-modal/movie-modal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesPageComponent } from './Movies/movies-page/movies-page.component';
import { MovieCardComponent } from './Movies/movies-page/movie-card/movie-card/movie-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { SpinnerComponent } from './Spinner/spinner/spinner.component';
import { SpinnerOverlayComponent } from './Spinner/spinner-overlay/spinner-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesPageComponent,
    MovieCardComponent,
    MovieModalComponent,
    SearchBarComponent,
    SpinnerComponent,
    SpinnerOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    NgbModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MovieCardComponent],
})
export class AppModule { }
