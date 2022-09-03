import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent, LoginComponent, RegisterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('render auth compnent', () => {

    it('should have class container-fluid', () => {
      const element = fixture.debugElement.query(By.css('.contaerereriner-fluid'));
      expect(element).toBeTruthy();
    });

    it('should have classes row and center-xs', () => {
      const element = fixture.debugElement.query(By.css('.row.center-xs'));
      expect(element).toBeTruthy();
    });

    it('should have classes col-lg-3 and col-xs-12', () => {
      const element = fixture.debugElement.query(By.css('.col-lg-3.col-xs-12'));
      expect(element).toBeTruthy();
    });

    it('should have class card', () => {
      const element = fixture.debugElement.query(By.css('.card'));
      expect(element).toBeTruthy();
    });

    it('should have button login', () => {
      const btnLogin = 'LOGIN';
      const element = fixture.nativeElement.querySelectorAll('button')[0].innerHTML;
      expect(element).toEqual(btnLogin);
    });

    it('should have button register', () => {
      const btnRegister = 'REGISTER';
      const element = fixture.nativeElement.querySelectorAll('button')[1].innerHTML;
      expect(element).toEqual(btnRegister);
    });

  });

  describe('render login and register components', () => {

    it('should render login component when clicked login button ', fakeAsync(() => {
      const onClickMock = spyOn(component, 'authOption');
      fixture.debugElement.query(By.css('.btn-login')).triggerEventHandler('click', null);
      component.renderLogin = true;
      component.renderRegister = false;
      expect(onClickMock).toHaveBeenCalledWith('login');
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('form')).toBeTruthy();
    })); 

    it('should render register component when clicked register button', fakeAsync(() => {
      const onClickMock = spyOn(component, 'authOption');
      fixture.debugElement.query(By.css('.btn-register')).triggerEventHandler('click', null);
      expect(onClickMock).toHaveBeenCalledWith('register');
      component.renderLogin = false;
      component.renderRegister = true;
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('form')).toBeTruthy();
    })); 

  });

});
