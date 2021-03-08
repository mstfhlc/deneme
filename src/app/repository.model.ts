import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository{
    private datasource:SimpleDataSource;
    private products:Product[];


    constructor(){
        this.datasource=new SimpleDataSource();
        this.products=new Array<Product>();
        this.datasource.getProducts().forEach(p=>this.products.push(p));
    }
    getProducts():Product[]{
        return this.products;
    }

    getProductById(id:number):Product{
        return this.products.find(p=>p.id==id);
    }

    getProductCount():number{
        return this.products.length;

    }
    addProduct(product:Product){
        this.products.push(product);
    }
    deleteProduct(product:Product){
        let index=this.products.indexOf(product);
        this.products.splice(index,1);
    }
}