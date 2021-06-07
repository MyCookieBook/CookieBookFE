import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPrivacyPageComponent } from './information-privacy-page.component';

describe('InformationPrivacyPageComponent', () => {
  let component: InformationPrivacyPageComponent;
  let fixture: ComponentFixture<InformationPrivacyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationPrivacyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPrivacyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
