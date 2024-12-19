import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { SellerServiceService} from '../services/seller-service.service'
import { Router } from '@angular/router';
import { LoginInterface, SignupInterface } from '../models/signup-interface';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellerServiceService, private route: Router) { }

  showLogin = false
  errorMsg:string = ''

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)])
  })

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)])
  })

  signup(data:SignupInterface) {
    
    this.seller.SignUp(data);
    
  }

  login(data:LoginInterface) {
    console.log(data)
    this.errorMsg = ''
    this.seller.userLogin(data);
    this.seller.isError.subscribe((error)=>{

    if(error){
        this.errorMsg = "Please enter valid email and password"
    }
    
    })
    

  }

  // toggle form 

  openLogin(){
    this.showLogin = false
  }

  openSignup(){
    this.showLogin = true
  }
}
