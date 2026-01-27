import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, shareReplay, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
  brand: string;
  type: 'tv' | 'speaker';
  description: string;
  image: string;
  // TV Properties
  size?: string;
  resolution?: string;
  refreshRate?: string;
  hdr?: string;
  smartTV?: string;
  connectivity?: string;
  power?: string;
  channels?: string;
  features?: string;
  frequency?: string;
  specs?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly dataUrl = 'assets/data/products.json';
  private products$ = new BehaviorSubject<Product[]>([]);
  private productsCache$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.productsCache$ = this.http.get<Product[]>(this.dataUrl).pipe(
      tap(products => {
        console.log('Productos cargados del JSON:', products);
        this.products$.next(products);
      }),
      catchError(error => {
        console.error('Error cargando productos:', error);
        return of([]);
      }),
      shareReplay(1)
    );
    
    // Cargar datos inmediatamente al inicializar
    this.productsCache$.subscribe();
  }

  getProducts(): Observable<Product[]> {
    return this.productsCache$;
  }

  getProductsByBrand(brand: string): Observable<Product[]> {
    return this.productsCache$.pipe(
      map(products => {
        if (!brand || brand === 'all') {
          return products;
        }
        return products.filter(p => p.brand === brand).slice(0, 3);
      })
    );
  }

  getBrands(): string[] {
    return ['Samsung', 'LG', 'Master G', 'Prime', 'Skyword', 'TCL', 'Sony', 'Xiaomi', 'Haier'];
  }
}
