import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn = false;
  status: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    // Lógica para determinar si el usuario ha iniciado sesión
    //this.isLoggedIn = this.authService.isLoggedIn(); // Ejemplo: utiliza un servicio de autenticación para verificar el estado de inicio de sesión
    return false
  }
  
  clickEvent(){
      this.status = !this.status;       
  }
}
