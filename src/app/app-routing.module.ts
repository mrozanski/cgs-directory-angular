import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { serviceTypesConfig } from './models/service-types.config';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListViewComponent,
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: serviceTypesConfig.pathById['2'],
  // },
  {
    path: serviceTypesConfig.pathById['1'],
    component: ListViewComponent,
    data: {
      category: serviceTypesConfig.categoryById['1'],
      service: '1'
    }
  },
  {
    path: serviceTypesConfig.pathById['2'],
    component: ListViewComponent,
    data: {
      category: serviceTypesConfig.categoryById['2'],
      service: '2'
    }
  },
  {
    path: serviceTypesConfig.pathById['3'],
    component: ListViewComponent,
    data: {
      category: serviceTypesConfig.categoryById['3'],
      service: '3'
    }
  },
  {
    path: serviceTypesConfig.pathById['4'],
    component: ListViewComponent,
    data: {
      category: serviceTypesConfig.categoryById['4'],
      service: '4'
    }
  },
  {
    path: serviceTypesConfig.pathById['5'],
    component: ListViewComponent,
    data: {
      category: serviceTypesConfig.categoryById['5'],
      service: '5'
    }
  },
  {
    path: serviceTypesConfig.pathById['6'],
    component: ListViewComponent,
    data: {
      category: serviceTypesConfig.categoryById['6'],
      service: '6'
    }
  },
  {
    path: serviceTypesConfig.pathById['7'],
    component: ListViewComponent,
    data: {
      category: serviceTypesConfig.categoryById['7'],
      service: '7'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
