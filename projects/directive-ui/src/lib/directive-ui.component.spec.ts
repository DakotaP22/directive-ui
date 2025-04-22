import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveUiComponent } from './directive-ui.component';

describe('DirectiveUiComponent', () => {
  let component: DirectiveUiComponent;
  let fixture: ComponentFixture<DirectiveUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
