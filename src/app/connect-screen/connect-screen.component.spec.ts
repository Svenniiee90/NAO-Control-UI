import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectScreenComponent } from './connect-screen.component';

describe('ConnectScreenComponent', () => {
  let component: ConnectScreenComponent;
  let fixture: ComponentFixture<ConnectScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
