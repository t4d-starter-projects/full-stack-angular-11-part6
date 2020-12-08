import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/Category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public displayedColumns: string[] = ['categoryName', 'description'];

  public categories: Category[] = [];

  constructor(private categoriesSvc: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesSvc.all().subscribe(categories => {
      this.categories = categories;
    });
  }

}
