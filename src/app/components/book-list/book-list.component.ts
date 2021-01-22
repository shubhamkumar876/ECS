import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/common/books';
import { ProductService } from 'src/app/services/product.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Books[] = [];

  public sortedBooks: Books[] = [];

  p: number = 1;

  public filter: any = this.appcomponent.filter;

  constructor(private productService: ProductService,
              public appcomponent: AppComponent) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe (
      (data) => {
        //console.log("component book-list " + JSON.stringify(data));
        this.books = (data);
        this.sortedBooks = (data);
      }
    );

    //this.sorting();

    }

    //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key:any){
    this.key = key;
    this.reverse = !this.reverse;
  }

    sorting() {
      this.books = this.sortedBooks.sort((n1,n2) => {
        if (n1.price > n2.price) {
            return 1;
        }
    
        if (n1.price < n2.price) {
            return -1;
        }
    
        return 0;
    });

    console.log("books.len = " + this.books.length);
    console.log("sortedbooks.len  = " + this.sortedBooks.length);
  
    for (let temp of this.sortedBooks) {
      console.log("sorted = " + temp.price);
      
    }
    }

}
