import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with email and password controls', () => {
    expect(component.loginform.contains('email')).toBeTruthy();
    expect(component.loginform.contains('password')).toBeTruthy();
  });

  it('should make the email control required', () => {
    const control = component.email;
    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    }
  });

  it('should validate the email format', () => {
    const control = component.email;
    if (control) {
      control.setValue('invalid-email');
      expect(control.valid).toBeFalsy();
    }
  });

  it('should make the password control required', () => {
    const control = component.password;
    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    }
  });

  it('should require the password to be at least 6 characters', () => {
    const control = component.password;
    if (control) {
      control.setValue('12345');
      expect(control.valid).toBeFalsy();
      control.setValue('123456');
      expect(control.valid).toBeTruthy();
    }
  });

  it('should enable the submit button when the form is valid', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    component.loginform.setValue({
      email: 'test@example.com',
      password: '123456'
    });
    fixture.detectChanges();
    expect(button.disabled).toBeFalsy();
  });

  it('should log the form value when the form is valid and submitted', () => {
    spyOn(console, 'log');
    component.loginform.setValue({
      email: 'test@example.com',
      password: '123456'
    });
    component.login();
    expect(console.log).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: '123456'
    });
  });
});
