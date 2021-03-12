import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Rol } from '../models/rol.enum';


@Injectable({
  providedIn: 'root'
})
export class ValidaRolService {

  
  constructor() { }

  //Valida el rol del usuario
   validRol(data,user){
    // validacion del usuario
    const obj = {
      usuario: user.usuario,
      desc_rol: data.resultado.desc_rol,
      status: data.resultado.exito
    }
    const {id_rol, exito} = data.resultado;
    const res = (exito && id_rol === Rol.Distribuidor)? true: false;
    if(res){
      sessionStorage.setItem('user',JSON.stringify(obj));
    }
    return res;

   }


}
