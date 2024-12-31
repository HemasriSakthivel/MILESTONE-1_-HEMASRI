import { Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

export const routes: Routes = [
    {
        path:"create-account",
        component:RegistrationComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"about-us",
        component:AboutComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"forgot-password",
        component:ForgetPasswordComponent
    }
];
