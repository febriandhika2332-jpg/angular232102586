import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http'; // <-- BARIS BARU: Import HttpClient

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
// Pastikan nama kelas menggunakan PascalCase: Sidebar
export class Sidebar implements OnInit { 
    @Input() moduleName: string = "";
    username: string = "";

    constructor(private cookieServive: CookieService, private router: Router,) {}

    ngOnInit(): void {
        this.username = this.cookieServive.get("userId");
    }
}