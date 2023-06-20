import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Cities, CitiesService, City } from '../services/cities.service';
import { SearchOptions } from '../models/search-options';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['../list-view/list-view.component.scss'],
  })

  export class SearchComponent implements OnInit, OnDestroy {
    @Input() selectedServiceTypeId = '0';
    @Input() selectedCity =  '';
    @Input() searchOptions: SearchOptions = new SearchOptions();

    @Output() onSearch = new EventEmitter<SearchOptions>();

    isSearching = false;
    previousSelectedCity = '';
    previousSelectedServiceTypeId = '0';

    cities: string[] = [];
    serviceTypes = [
        { id: '2', label: 'Housing - Assisted Living Residencies' },
        { id: '5', label: 'Housing - Nursing Care Facilities' },
        { id: '6', label: 'Housing - Independent Living' },
        { id: '4', label: 'Housing - Affordable Housing' },
        { id: '1', label: 'Help in the Home - Adult Day Care Centers' },
        { id: '3', label: 'Help in the Home - Home Care' },
        { id: '7', label: 'Help in the Home - Hospices' },
      ];

    constructor(
      private citiesService: CitiesService
    ) {
      
    }

    ngOnInit() {
      this.previousSelectedServiceTypeId = this.selectedServiceTypeId;
      this.getAllCities();
    }
    
    ngOnDestroy() {
    }

    typeChange(event: string) {

    }

    doSearch() {
      if (this.selectedServiceTypeId !== this.previousSelectedServiceTypeId) {
        // Avoids emitting the value that is passed originally from the parent component
        this.isSearching = true;
        this.onSearch.emit( new SearchOptions(this.selectedServiceTypeId, this.selectedCity) );
      };
    }

    getAllCities() {
        this.citiesService.getAllCities()
          .subscribe((data) => {
            this.cities = data.cities.map((city:City) => { return city.city_name;})
        });
    }
}