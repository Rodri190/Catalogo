import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { FilterComponent } from './app/components/filter/filter.component';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { ProductService, Product } from './app/services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FilterComponent, ProductListComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
        <app-filter (brandSelected)="filterByBrand($event)"></app-filter>
        <app-product-list [products]="filteredProducts"></app-product-list>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d2d2d 100%);
    }

    main {
      padding-bottom: 3rem;
    }
  `]
})
export class App {
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.filteredProducts = products;
    });
  }

  filterByBrand(brand: string): void {
    this.productService.getProductsByBrand(brand).subscribe(products => {
      this.filteredProducts = products;
    });
  }
}


bootstrapApplication(App, {
  providers: [provideHttpClient()]
});
