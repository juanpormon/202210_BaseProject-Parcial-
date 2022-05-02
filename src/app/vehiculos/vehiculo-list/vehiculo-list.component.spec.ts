/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../Vehiculo';



describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ],
      providers: [ VehiculoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  component.vehiculos = [
  new Vehiculo(
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.datatype.number(),
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
   ),
  ];

   fixture.detectChanges();
   debug = fixture.debugElement;
 });


  it('should create', () => {
    expect(component).toBeTruthy();

});

})
