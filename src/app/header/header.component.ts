import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StreetlightsService } from '../streetlights.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // @Output() centerEvent = new EventEmitter<google.maps.LatLngLiteral>();
  constructor(private service: StreetlightsService, private router: Router) {}

  ngOnInit(): void {}

  getLocation = (form: NgForm) => {
    // this.service.getLocation(form.value.search).subscribe((response) => {
    // (response.results[0].geometry.location);
    this.router.navigate(['/main'], {
      queryParams: {
        search: form.value.search,
      },
    });
    // });
    // this.router.navigate(['/main']);
    // location.reload();
  };
}
