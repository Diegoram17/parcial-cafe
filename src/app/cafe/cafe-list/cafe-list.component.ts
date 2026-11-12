import { Component, OnInit, signal } from '@angular/core';
import { Cafe } from '../cafe.model';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes = signal<Cafe[]>([]);

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.cafeService.getCafes().subscribe(cafes => this.cafes.set(cafes));
  }
}
