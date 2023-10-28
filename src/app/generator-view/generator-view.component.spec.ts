import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorViewComponent } from './generator-view.component';

describe('GeneratorViewComponent', () => {
  let component: GeneratorViewComponent;
  let fixture: ComponentFixture<GeneratorViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratorViewComponent]
    });
    fixture = TestBed.createComponent(GeneratorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
