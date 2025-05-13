import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUser } from 'src/models/Dtos/userDtos/loginUser';
import { UserDto } from 'src/models/Dtos/userDtos/userDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username?: string;
  password?: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginUser: LoginUser){
    this.authService.login(loginUser);
    this.router.navigateByUrl('clips');
  }
}
