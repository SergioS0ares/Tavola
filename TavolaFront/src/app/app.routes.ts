import { Routes } from '@angular/router';
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
    {
        path: "auth/login",
        loadComponent: () => import("./pages/login/login.component").then(mod => mod.LoginComponent),
      },
      {
        path: "auth/cadastro",
        loadComponent: () => import("./pages/cadastro/cadastro.component").then(mod => mod.CadastroComponent),
      },

];
