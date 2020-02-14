import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { from } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  //set activated route as a dependency by defining it
  //as a parameter to the constructor function
  //the ActivatedRoute instance is then injected into
  //this component class
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    //we're using the snapshot approach here because 
    //don't expect the url to change
    //we get the id from the route and store it in a local variable
    //"let" defines a blockscoped variable
    //because the parameter is provided as a string
    //we add a plus sign (+) at the beginning
    //the a plus sign (+) is a JS shortcut to
    //convert the parameter string to numeric id
    // let id = +this.route.snapshot.paramMap.get('id');
    // this.pageTitle += `: ${id}`;
    // this.product = {
    //   "productId": id,
    //   "productName": "Leaf Rake",
    //   "productCode": "GDN-0011",
    //   "releaseDate": "March 19, 2019",
    //   "description": "Leaf rake with 48-inch wooden handle.",
    //   "price": 19.95,
    //   "starRating": 3.2,
    //   "imageUrl": "assets/images/leaf_rake.png"
  
    // }
    //beginning of product service
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  //lets build a method that navigates back
  //this method does not take any parameters and does not return anything(void)
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
