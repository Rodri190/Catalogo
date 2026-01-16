import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() brandSelected = new EventEmitter<string>();

  brands: string[] = [];
  selectedBrand: string = 'all';

  constructor(private productService: ProductService) {
    this.brands = this.productService.getBrands();
  }

  onBrandChange(): void {
    this.brandSelected.emit(this.selectedBrand);
  }
}
