import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { ManagerServersComponent } from './manager-servers/manager-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateComponent } from './update/update.component';
import { ServeursComponent } from './serveurs/serveurs.component';
import { DetailServeurComponent } from './serveurs/detail-serveur/detail-serveur.component';
import { EditServeurComponent } from './serveurs/edit-serveur/edit-serveur.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';
import { RhManagerComponent } from './rh-manager/rh-manager.component';



const myRoutes : Routes = [
    {path :'', component : HomeComponent },
    {path : 'cv', children : [
        {path: '', component: CvComponent},
        {path : 'add', component: AddComponent, canActivate : [LoginGuard] },
        {path : ':id', component: InfosComponent },
        {path : 'edit/:id', component: UpdateComponent, canActivate : [LoginGuard] },
    ] },
    {path : 'extra/servers', component: ManagerServersComponent },
    {path : 'word', component: MsWordComponent },
    {path : 'rh', component: RhManagerComponent },
    {path : 'login', component: LoginComponent, canActivate : [LogoutGuard] },
    {path : 'serveurs', component: ServeursComponent, children: [
        {path: ':id', component: DetailServeurComponent},
        {path: ':id/edit', component: EditServeurComponent},
    ]  },
    {path : 'not-found', component : NotFoundComponent},
    {path : '**', redirectTo: 'not-found' },
]

export const GTEC_ROUTING = RouterModule.forRoot(myRoutes);