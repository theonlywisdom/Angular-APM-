import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      //this module ensures that we do not re-register
      // the routed service
      { path: 'products', component: ProductListComponent },
      //we can add multiple route parameters separated by slashes(/)
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
