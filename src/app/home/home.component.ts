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
  constructor(private fb: FormBuilder, private mapService: MapService) {
    this.form = fb.group({
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log(form.value.address);

    this.mapService.getCoordinates(form.value.address).subscribe(([google, openStreet]) => {
      console.log(google);
      console.log(openStreet);
    });

  }

}
