import { Component } from '@angular/core';

@Component({
  selector: 'components-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  onSubmit(): void {
    // Aquí puedes implementar la lógica para autenticar al usuario utilizando servicios, llamadas HTTP, etc.
    // Por ejemplo, puedes llamar a un servicio de autenticación y verificar las credenciales del usuario.
    // Puedes almacenar el estado de autenticación utilizando localStorage, cookies o un servicio de gestión de estado (como NgRx) según tus necesidades.
  }

}
