import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { serviceTypesConfig } from '../models/service-types.config';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  selectedServiceTypeId = '';
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
   onSelected(event: string) {
    this.router.navigate(['/' + serviceTypesConfig.pathById[event]], { });    
   }

}
