// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginResponse } from "../models/response/login-response";
import { API_URL } from "../../shared/constants/urls.constant";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private apiurl = API_URL.AUTH;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  };

  login(username: String, password: String) {
    return this.http.post<LoginResponse>(`${this.apiurl}/login`, { dni: username }, this.httpOptions);
  }

  isLogged(): boolean {
    return sessionStorage?.getItem("dni") != undefined;
  }

  getUserRole(): any {
    return sessionStorage?.getItem("cargo");
  }

  getUserDni(): any {
    return sessionStorage?.getItem("dni");
  }

  getUserId(): any {
    return sessionStorage?.getItem("idEmpleado");
  }

  getUserArea(): string {
    return sessionStorage?.getItem("area") as string;
  }
}