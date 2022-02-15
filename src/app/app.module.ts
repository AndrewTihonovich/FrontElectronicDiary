import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent }   from './app.component';
import {LoginComponent} from './components/login/login.component';
import { NotFoundComponent }   from './components/not-found/not-found.component';
import { HomeComponent }   from './components/home/home.component';
import { RegistrationComponent }   from './components/registration/registration.component';
import { RecordComponent }   from './components/record/record.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateRecordComponent } from './components/record/create/createRecord.component';
import { EditRecordComponent } from './components/record/edit/editRecord.component';

const recordChildRoutes: Routes = [
    {path: 'create', component: CreateRecordComponent},
    {path: 'edit', component: EditRecordComponent}
];

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'record', component: RecordComponent},
    //{path: 'record/', component: RecordComponent, children: recordChildRoutes},
    {path: 'record/create', component: CreateRecordComponent},
    {path: 'record/edit', component: EditRecordComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    declarations: [ 
        AppComponent, 
        LoginComponent,
        NotFoundComponent,
        HomeComponent,
        RegistrationComponent,
        RecordComponent,
        CreateRecordComponent,
        EditRecordComponent,
     ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }