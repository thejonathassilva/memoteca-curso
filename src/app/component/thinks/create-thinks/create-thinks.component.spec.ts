import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThinksComponent } from './create-thinks.component';

describe('CreateThinksComponent', () => {
  let component: CreateThinksComponent;
  let fixture: ComponentFixture<CreateThinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateThinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
