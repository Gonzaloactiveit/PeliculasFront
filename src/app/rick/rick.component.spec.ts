import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickComponent } from './rick.component';

describe('RickComponent', () => {
  let component: RickComponent;
  let fixture: ComponentFixture<RickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'card-view'`, () => {
    const fixture = TestBed.createComponent(RickComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('card-view');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
