import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['../list-view/list-view.component.scss'],
  })

  export class SearchComponent implements OnInit, OnDestroy {
    @Output() selected = new EventEmitter<string>();
    @Input() selectedServiceTypeId = '0';
    previousSelectedServiceTypeId = '0';

    serviceTypes = [
        { id: '2', label: 'Housing - Assisted Living Residencies' },
        { id: '5', label: 'Housing - Nursing Care Facilities' },
        { id: '6', label: 'Housing - Independent Living' },
        { id: '4', label: 'Housing - Affordable Housing' },
        { id: '1', label: 'Help in the Home - Adult Day Care Centers' },
        { id: '3', label: 'Help in the Home - Home Care' },
        { id: '7', label: 'Help in the Home - Hospices' },
      ];

      typeChange(event: string) {
        if (event !== this.previousSelectedServiceTypeId) {
          // Avoids emitting the value that is passed originally from the parent component
          this.selected.emit(event);
        }
        
      }

      ngOnInit() {
        this.previousSelectedServiceTypeId = this.selectedServiceTypeId;
      }
      
      ngOnDestroy() {
      }
}