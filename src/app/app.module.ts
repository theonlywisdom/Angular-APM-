import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { from } from 'rxjs';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      //the order of the routes in this array matters
      //as the router uses a first match win strategy 
      //when matching the routes
      //therefore more specific routes should always be before less specific routes
      //configure app routes with route definitions
      //each definition specifies a route object
      //each route requires a path
      //the path property defines the url path segment for the route
      //the url path segment is appended to the url when the respective route is activated in the app
      //the specified component is the component associated with the route
      //it this component template that is displayed when the component is activated
      { path: 'products', component: ProductListComponent },
      //we can add multiple route parameters separated by slashes(/)
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      //when the app loads we want to default to the WelcomeComponent
      //so we specify a default route that redirects to the WelcomeComponent
      //we also define a redirect route which requires a pathMatch property
      //to match the url path segment to the route
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      //asterisks(**) denote a wildcard path
      //the router matches this path if the requested url does not match any prior paths 
      //defined in the routes configuration
      //this is useful for displaying a 404 not found page
      //or redirecting to another route
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
