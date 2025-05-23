import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUser } from 'src/models/Dtos/userDtos/loginUser';
import { UserDto } from 'src/models/Dtos/userDtos/userDto';
import { UserToRegisterDto } from 'src/models/Dtos/userDtos/userToRegisterDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;

  private currentUserSource = new BehaviorSubject<UserDto | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(loginUser: LoginUser){
    this.http.post<UserDto>(`${this.baseUrl}/accounts/authenticate`, loginUser).subscribe({
      next: (user: UserDto) => {
        console.log('authService::login(). User: ', user)
        localStorage.setItem('token', user.token);
        this.currentUserSource.next(user);
      },
      error: err => console.log(err)
    });
  }

  logout(){
    this.currentUserSource.next(null);
  }

  register(userToRegister: UserToRegisterDto){
    this.http.post<UserDto>(`${this.baseUrl}/register`, userToRegister).subscribe({
      next: (user: UserDto) => {
        console.log('authService::register(). User: ', user)
        this.currentUserSource.next(user);
      },
      error: err => console.log(err)
    });
  }
}
