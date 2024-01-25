import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeaderComponent } from './site-header.component';
import { first } from 'rxjs';

describe('SiteHeaderComponent', () => {
  let component: SiteHeaderComponent;
  let fixture: ComponentFixture<SiteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should raise click event', () => {
    let click: boolean = false;
    component.onNavMenuIconClicked.pipe(first()).subscribe({
      next: (_) => {
        click = true;
      }
    })

    component.navMenuClicked();

    expect(click).toBe(true);
  })
});
