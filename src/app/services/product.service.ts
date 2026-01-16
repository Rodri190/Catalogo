import { Injectable } from '@angular/core';

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
  private products: Product[] = [
    {
      id: 1,
      name: 'Samsung QLED 4K',
      brand: 'Samsung',
      type: 'tv',
      description: 'Televisor QLED con tecnología Quantum Dot para colores vibrantes',
      size: '55 pulgadas',
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: 'LG OLED C3',
      brand: 'LG',
      type: 'tv',
      description: 'Pantalla OLED con negros perfectos y colores impresionantes',
      size: '65 pulgadas',
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'Sony Bravia XR',
      brand: 'Sony',
      type: 'tv',
      description: 'Procesador cognitivo XR para imagen y sonido premium',
      size: '55 pulgadas',
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      name: 'TCL Mini LED',
      brand: 'TCL',
      type: 'tv',
      description: 'Tecnología Mini LED con alto brillo y contraste',
      size: '50 pulgadas',
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      name: 'Xiaomi Mi TV',
      brand: 'Xiaomi',
      type: 'tv',
      description: 'Smart TV con Android TV y diseño minimalista',
      size: '43 pulgadas',
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      name: 'Master G Smart TV',
      brand: 'Master G',
      type: 'tv',
      description: 'Smart TV 4K con HDR y conectividad completa',
      size: '50 pulgadas',
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      name: 'Samsung Soundbar HW-Q800',
      brand: 'Samsung',
      type: 'speaker',
      description: 'Barra de sonido premium con Dolby Atmos',
      specs: 'Potencia: 330W, Subwoofer inalámbrico, Bluetooth 5.0',
      image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      name: 'LG Sound Bar',
      brand: 'LG',
      type: 'speaker',
      description: 'Sistema de audio envolvente con subwoofer',
      specs: 'Potencia: 300W, DTS:X, Wi-Fi y Bluetooth',
      image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 9,
      name: 'Sony HT-A7000',
      brand: 'Sony',
      type: 'speaker',
      description: 'Barra de sonido premium con audio espacial',
      specs: 'Potencia: 500W, Sonido 360, HDMI eARC',
      image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 10,
      name: 'Prime Audio System',
      brand: 'Prime',
      type: 'speaker',
      description: 'Sistema de audio 2.1 con graves potentes',
      specs: 'Potencia: 150W, Subwoofer de 6.5", USB y Bluetooth',
      image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 11,
      name: 'Skyword Premium Sound',
      brand: 'Skyword',
      type: 'speaker',
      description: 'Parlantes bluetooth portátiles de alta fidelidad',
      specs: 'Potencia: 80W, Batería 12h, Resistente al agua IPX7',
      image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 12,
      name: 'Haier Home Theater',
      brand: 'Haier',
      type: 'speaker',
      description: 'Sistema de cine en casa 5.1',
      specs: 'Potencia: 400W, 5 satélites + Subwoofer, DVD incluido',
      image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByBrand(brand: string): Product[] {
    if (!brand || brand === 'all') {
      return this.products;
    }
    return this.products.filter(p => p.brand === brand);
  }

  getBrands(): string[] {
    return ['Samsung', 'LG', 'Master G', 'Prime', 'Skyword', 'TCL', 'Sony', 'Xiaomi', 'Haier'];
  }
}
