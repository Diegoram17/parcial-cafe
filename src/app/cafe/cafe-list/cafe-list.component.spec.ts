import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CafeListComponent } from './cafe-list.component';
import { Cafe } from '../cafe.model';

describe('CafeListComponent', () => {
  let fixture: ComponentFixture<CafeListComponent>;
  let component: CafeListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeListComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
  });

  it('debe crear una tabla con 3 filas más el encabezado', () => {
    const cafes: Cafe[] = [
      new Cafe(1, 'Café Uno', 'Blend', 'Región 1', 'Panela', 1900, 'img1.jpg'),
      new Cafe(2, 'Café Dos', 'Café de Origen', 'Región 2', 'Cacao', 1800, 'img2.jpg'),
      new Cafe(3, 'Café Tres', 'Blend', 'Región 3', 'Caramelo', 1700, 'img3.jpg')
    ];

    component.cafes.set(cafes);
    fixture.detectChanges();

    const filas = fixture.nativeElement.querySelectorAll('tr');
    expect(filas.length).toBe(4);
  });
});