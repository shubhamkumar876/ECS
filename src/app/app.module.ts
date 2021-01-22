import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ProductService } from './services/product.service';


// const routes: Routes = [
//   {path:}
// ]

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    //RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
