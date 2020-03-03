import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MapService} from '../services/map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MapService]
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  googleMapsResult: any;
  openStreetMapsResult: any;
  constructor(private fb: FormBuilder, private mapService: MapService) {
    this.form = fb.group({
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    this.mapService.getCoordinates(form.value.address).subscribe(([google, openStreet]) => {
      this.googleMapsResult = google;
      this.openStreetMapsResult = openStreet;
    });
  }

  onClick(value) {
    this.form.setValue({address: value});
    this.onSubmit(this.form);
  }

}
