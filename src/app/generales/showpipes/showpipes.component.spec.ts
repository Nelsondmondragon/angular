import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpipesComponent } from './showpipes.component';

describe('ShowpipesComponent', () => {
  let component: ShowpipesComponent;
  let fixture: ComponentFixture<ShowpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowpipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
