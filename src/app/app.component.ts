import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, delay } from "rxjs/operators";
import axios from 'axios';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div><div>Progress: </div><div>Response:<pre></pre></div><button (click)="fetchData()"> Get </button><button (click)="fetchData2()"> Get2 </button>`,
})
export class AppComponent {
  value = 'World';

  private apiURL = "/api/demo";
  public message: string = "Uninitialized";
  public response;

  constructor(private httpClient: HttpClient) {}

  
  async fetchData() {
    this.message = "Fetching..";
    this.response = "";
    this.response = await axios(this.apiURL, {
      method: "get",
      withCredentials: true,
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",                
      }
    });
    this.message = "Fetched";
  }

  async fetchData2() {
    this.message = "Fetching..";
    this.response = "";
    this.response = await axios(this.apiURL, {
      method: "get",
      withCredentials: true,
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",                
      }
    });
    this.message = "Fetched";
  }
}
