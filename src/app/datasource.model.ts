import { Product } from "./product.model";

export class SimpleDataSource{
    private products:Product[];

    constructor(){
        this.products=new Array<Product>(

            new Product(1,"Samsung s5","iyi telefon","1.jpg.jpg",1000),
            new Product(2,"Samsung s6","iyi telefon","1.jpg.jpg",2000),
            new Product(3,"Samsung s7","iyi telefon","1.jpg.jpg",3000),
            new Product(4,"Samsung s8","iyi telefon","1.jpg.jpg",4000),
            new Product(5,"Samsung s9","iyi telefon","1.jpg.jpg",5000)
            );

    }

  getProducts():Product[]{
      return this.products;
  }


}