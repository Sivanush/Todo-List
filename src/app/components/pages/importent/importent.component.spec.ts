import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportentComponent } from './importent.component';

describe('ImportentComponent', () => {
  let component: ImportentComponent;
  let fixture: ComponentFixture<ImportentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
