import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { serviceTypesConfig } from '../models/service-types.config';
import { SearchOptions } from '../models/search-options';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  searchOptions: SearchOptions = new SearchOptions();
  selectedServiceTypeId = '';
  selectedCity = '';
  selectedLabel = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
      this.selectedServiceTypeId = '1';
   }
   ngOnInit(): void {
    const { category, service } = this.route.snapshot.data;
    this.selectedServiceTypeId = service;
   }
   onSearch(event: SearchOptions) {
    const { selectedServiceTypeId, selectedCity } = event;
    this.router.navigate(['/' + serviceTypesConfig.pathById[selectedServiceTypeId]], { });
   }

}
