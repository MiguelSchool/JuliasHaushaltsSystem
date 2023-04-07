import { Component }                   from '@angular/core';
import { LoginStateCollectionService } from '../../share/store/login-state-collection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private loginstate : LoginStateCollectionService) {}
}
