import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-as-keyword',
  templateUrl: './as-keyword.component.html',
  styleUrls: ['./as-keyword.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AsKeywordComponent implements OnInit {

  public person$;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    setTimeout(() => this.person$ = this.http.get('/assets/person.json'), 3000);
    // this.person$ = this.http.get('/assets/person.json');
  }
}
