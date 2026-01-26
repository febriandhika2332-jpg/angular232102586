import { Routes, CanActivateFn } from '@angular/router';
import { Mahasiswa } from './mahasiswa/mahasiswa';

export const routes: Routes = [
    {path: "", redirectTo: "mahasiswa", pathMatch: "full"},
    {path: "mahasiswa", component: Mahasiswa},
    ];
