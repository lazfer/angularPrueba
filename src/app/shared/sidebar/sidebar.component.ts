import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { InfoComponent } from 'src/app/components/info/info.component';
import { MnsComponent } from 'src/app/components/mns/mns.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
private mediaMatcher:MediaQueryList = matchMedia("(max-width:720px)");
loginStatus: boolean;
  constructor(private authService: AuthService,
    private router: Router,
    public dialog: MatDialog) {
    this.loginStatus = false;
   }
  ngOnInit(): void {
       
   }
  
 
 screenSmall(){
   return this.mediaMatcher.matches;
 }

valida(){
  if(!sessionStorage.getItem('user')){
    this.dialog.open(MnsComponent);
  }
}

finish(){
  if(sessionStorage.getItem('user')){
    this.dialog.open(AlertComponent);
  }
}


}


