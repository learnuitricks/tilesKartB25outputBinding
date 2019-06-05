import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showErrorMessage:boolean = false;
  userName:string = '';
   constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    if (this.userName == null || this.userName ==""){
      alert(`alert user name is required`);
      this.showErrorMessage = true;
    
    }
    else{
      console.log('you are good');
      this.router.navigate(['/tiles']);
      //redirect to the tiles compoent
    }
  }

}
