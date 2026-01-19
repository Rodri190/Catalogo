import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  brand: string;
  type: 'tv' | 'speaker';
  description: string;
  size?: string;
  specs?: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly dataUrl = '/assets/data/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProductsByBrand(brand: string): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => {
        if (!brand || brand === 'all') {
          return products;
        }
        return products.filter(p => p.brand === brand);
      })
    );
  }

  getBrands(): string[] {
    return ['Samsung', 'LG', 'Master G', 'Prime', 'Skyword', 'TCL', 'Sony', 'Xiaomi', 'Haier'];
  }
}
