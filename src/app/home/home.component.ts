import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] = [{id: 0, payload: {label: 'Sofia'}},
    {id: 1, payload: {label: 'Plovdiv'}},
    {id: 2, payload: {label: 'Stara Zagora'}},
    {id: 3, payload: {label: 'Burgas'}},
    {id: 4, payload: {label: 'Varna'}},
    {id: 5, payload: {label: 'Veliko Tarnovo'}},
    {id: 6, payload: {label: 'Pleven'}}
  ];
  config: any = {'class': 'form-control-autocomplete', 'max': 2, 'placeholder': 'address', 'sourceField': ['payload', 'label']};
  selectedItem: any;
  inputChanged: any;
  constructor() { }

  ngOnInit() {
  }

  onSelect(item: any) {
    this.selectedItem = item;
  }

  onInputChangedEvent(val: string) {
    this.inputChanged = val;
  }

  search (term: {}) {
    console.log(term);
    // search and subscribe
  }




}
