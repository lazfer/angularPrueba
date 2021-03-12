import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {
  obj: string;
  exercise1:any;
  exercise2:any;
  exercise3:any;
  constructor() { 
  this.obj = '';

  }

  ngOnInit(): void {
    const array1 = [ 
    { value: 1 , name: 'CampoUno'}, 
    { value: 2 , name: 'CampoDos'}, 
    { value: 3 , name: 'CampoTres'}, 
    { value: 4 , name: 'CampoCuatro'}, 
    { value: 5 , name: 'CampoCinco'}, 
    { value: 6 , name: 'CampoSeis'}, ];

    const array2 = [ { value: 21 , name: 'a'}, 
                    { value: 20 , name: 'b'}, 
                    { value: 19 , name: 'c'}, 
                    { value: 18 , name: 'd'}, 
                    { value: 17 , name: 'e'}, 
                    { value: 16 , name: 'f'}, ];

    const obj =  { CampoUno: 1, CampoDos: 2, CampoTres: 3, CampoCuatro: 4, CampoCinco: 5, CampoSeis: 6 }

    this.exercise1 = this.concatenate(array1);
    this.exercise2 = this.concatenate(array2);
    this.exercise3 = this.concatenate(obj);
    
  }

 concatenate(ele:any){
  this.obj = '';
  if(ele.length){
    ele.map( (res:any) => {
      this.obj+= `"${res.name}": "${res.value}",`;
      });
      this.obj = '{'+this.obj;
      this.obj = this.obj.slice(0, -1)+'}';
      
  } else {
    for (const property in ele) {
      this.obj += `{"value": "${ele[property]}", "name":"${property}"},`
    }
      this.obj = '['+this.obj;
      this.obj = this.obj.slice(0, -1)+']';
   }
   console.log(this.obj);
   return JSON.parse(this.obj);
  }


}
