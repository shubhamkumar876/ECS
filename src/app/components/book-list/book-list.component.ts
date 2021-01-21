import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/common/books';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Books[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe (
      (data) => {
        //console.log("component book-list " + JSON.stringify(data));
        this.books = (data);
      }
    );
    }

}
