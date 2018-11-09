import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';



import { ProductDetailComponent } from '../product-detail/product-detail.component';
import {ProductDetailGuard} from '../product-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    
    RouterModule.forChild([
      {path: 'products', component:ProductListComponent},
      {path: 'products/:id',canActivate:[ProductDetailGuard], component: ProductDetailComponent}

    ]),

    SharedModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,

  ]
})
export class ProductModule { }
