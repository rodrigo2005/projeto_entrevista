import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CookieService } from '../services/cookie.service';
import { User } from '../models/auth.models';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/account/auth/login/login.model';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User;

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    public decodePayloadJWT(): any {
        try {
          return jwt_decode(this.currentUser().jwt);
        } catch (Error) {
          return null;
        }
      }

    get hasAutority(): string{
        const objetoSessao = this.decodePayloadJWT();
        return objetoSessao.role[0].nomeRole;
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        console.log(this.user)
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
        }
        return this.user;
    }

    login(login: Login): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/login/autenticar`, login)
            .pipe(map(user => {
                if (user && user.jwt) {
                    this.user = user;
                    this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
                }
                return user;
            }));
    }

    /**
     * Logout the user
     */
    logout() {
        this.cookieService.deleteCookie('currentUser');
        this.user = null;
    }
}

