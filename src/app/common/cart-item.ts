import { Books } from "./books";

export class CartItem {

    title: string | undefined;
    author: string | undefined;
    isbn: number | undefined;
    unitPrice: number = 0;

    quantity: number = 0;
    

    constructor(product: Books ){
        this.title = product.title;
        this.author = product.authors;
        this.isbn = product.isbn;
        this.unitPrice = product.price;

        this.quantity = 1;
    }
}


