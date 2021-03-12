import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoComponent } from 'src/app/components/info/info.component';
import { AuthService } from 'src/app/services/auth.service';
import { ValidaRolService } from 'src/app/services/valida-rol.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorUser: boolean;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private validaRolService: ValidaRolService,
    private router: Router,
    public dialog: MatDialog ) { 
      this.errorUser = false;
    }

  ngOnInit(): void {
    this.form = this.fb.group({
      usuario: ['', [Validators.required]],
      contrasena: ['', Validators.required]
    });
    sessionStorage.removeItem('user');
  }

  onSubmit(){
    this.authService.setAuth(this.form.value).subscribe(
      data => {
        if(data.resultado){
          const rol = this.validaRolService.validRol(data, this.form.value);
          // validacion de rol
         (rol)?this.redirecTo():this.showAlert();
         } else {
           this.errorUser = true;
         }
      }
    )
  }
//Direcciona al dashboard
  redirecTo(){
      this.router.navigate(['/dashboard']);
  }
//Muestra el mensaje
  showAlert(){
  this.dialog.open(InfoComponent);
  }
  
}
