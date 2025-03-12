import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

interface userInfo {
  dni: string;
  area: string;
  cargo: string;
  idEmpleado: string;
}

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss'
})
export class TopnavComponent implements OnInit {

  authService = inject(AuthService);
  userInfo: userInfo = { dni: '', area: '', cargo: '', idEmpleado: '' };
  userInfoView: boolean = false;

  ngOnInit(): void {
    this.userInfo.idEmpleado = this.authService?.getUserId();
    this.userInfo.area = this.authService?.getUserArea();
    this.userInfo.cargo = this.authService?.getUserRole();
    this.userInfoView = this.authService.isLogged();
  }


}
