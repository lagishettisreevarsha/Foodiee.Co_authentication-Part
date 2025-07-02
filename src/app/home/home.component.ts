import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchQuery = '';
  selectedCategory = '';
  foodItems: any[] = [];
  categories: string[] = [];

  savedItems = new Set<number>();
  favoritedItems = new Set<number>();
  
  constructor(private router: Router, private foodService: FoodService) {}

  ngOnInit() {
    this.foodService.getFoods().subscribe(data => {
      this.foodItems = data;
    });

    this.foodService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  toggleSave(id:number){
    this.savedItems.has(id)? this.savedItems.delete(id) : this.savedItems.add(id)
  }

  toggleFavorite(id:number){
    this.favoritedItems.has(id)? this.favoritedItems.delete(id): this.favoritedItems.add(id)
  }

  isSaved(id:number):boolean{
    return this.savedItems.has(id)
  } 

  idFavorited(id:number):boolean{
    return this.favoritedItems.has(id)
  }
  logout() {
    this.router.navigate(['/']);
  }

  filteredItems() {
    return this.foodItems.filter(item =>
      (!this.selectedCategory || item.category === this.selectedCategory) &&
      (!this.searchQuery || item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }
get allCategories(): string[] {
  return ['All', ...this.categories];
}

  selectCategory(category: string) {
  this.selectedCategory = category === 'All' ? '' : category;
}

}
