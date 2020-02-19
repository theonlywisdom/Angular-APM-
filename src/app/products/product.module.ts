import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      //this module ensures that we do not re-register
      // the routed service
      { path: 'products', component: ProductListComponent },
      //we can add multiple route parameters separated by slashes(/)
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
    ])
  ]
})
export class ProductModule { }
