import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { ScrollService } from '../services/scroll.service';

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
  showChatbot = false;

  savedItems = new Set<number>();
  favoritedItems = new Set<number>();

  constructor(public router: Router, private foodService: FoodService, private scrollService: ScrollService) {}

  scrollPosition = 0;

  ngOnInit() {
    this.foodService.getFoods().subscribe(data => {
      this.foodItems = data;
      setTimeout(() => {
        window.scrollTo(0, this.scrollService.getScrollPosition());
      }, 0);
    });

    this.foodService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  toggleSave(id: number) {
    this.savedItems.has(id) ? this.savedItems.delete(id) : this.savedItems.add(id);
  }

  toggleFavorite(id: number) {
    this.favoritedItems.has(id) ? this.favoritedItems.delete(id) : this.favoritedItems.add(id);
  }

  isSaved(id: number): boolean {
    return this.savedItems.has(id);
  }

  idFavorited(id: number): boolean {
    return this.favoritedItems.has(id);
  }

  filteredItems() {
    return this.foodItems.filter(item =>
      (!this.selectedCategory || item.category === this.selectedCategory) &&
      (!this.searchQuery || item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }

  get allCategories(): any[] {
    return ['All', ...this.categories];
  }

  selectCategory(category: any) {
    const cat = category.name || category;
    this.selectedCategory = cat === 'All' ? '' : cat;
  }

  goToFoodDetail(id: number) {
    this.scrollService.setScrollPosition(window.scrollY);
    this.router.navigate(['/food', id]);
  }

  goToSaved() {
    this.router.navigate(['/saved']);
  }

  goToFavorites() {
    this.router.navigate(['/favorites']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToChatbot() {
    this.router.navigate(['/chatbot']);
  }
}
