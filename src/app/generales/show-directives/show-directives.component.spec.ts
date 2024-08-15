import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDirectivesComponent } from './show-directives.component';

describe('ShowDirectivesComponent', () => {
  let component: ShowDirectivesComponent;
  let fixture: ComponentFixture<ShowDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
