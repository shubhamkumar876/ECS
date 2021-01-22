import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/common/books';
import { ProductService } from 'src/app/services/product.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { StarRatingComponent } from 'ng-starrating';

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

  public showAuthor:boolean = true;
  public showIsbn:boolean = true;
  public showLang:boolean = true;


  constructor(private productService: ProductService,
              public cartService: CartService,
              public appcomponent: AppComponent) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe (
      (data) => {
        //console.log("component book-list " + JSON.stringify(data));
        this.books = (data);
        this.sortedBooks = (data);
      }
    );

    }

    //sorting
  key: string = 'price'; //set default
  reverse: boolean = false;
  sort(key:any){
    this.key = key;
    this.reverse = !this.reverse;
  }

  addToCart(theProduct: Books) {
    console.log(`Adding to cart: ${ theProduct.title }, ${ theProduct.price}`);
  
    const theCartItem = new CartItem(theProduct);
  
    this.cartService.addToCart(theCartItem);
  
  }


}
