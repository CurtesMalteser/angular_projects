import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './book/book.reducer';
import { AppState } from './app.state';
import { HttpClientModule } from '@angular/common/http';
import { BookModule } from './book/book.module';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './book/book.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({ book: BookReducer }),
    HttpClientModule,
    BookModule,
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
