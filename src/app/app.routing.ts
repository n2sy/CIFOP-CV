import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { ManagerServersComponent } from './manager-servers/manager-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateComponent } from './update/update.component';



const myRoutes : Routes = [
    {path :'', component : HomeComponent },
    {path : 'cv', children : [
        {path: '', component: CvComponent},
        {path : 'add', component: AddComponent },
        {path : ':id', component: InfosComponent },
        {path : 'edit/:id', component: UpdateComponent },
    ] },
    {path : 'extra/servers', component: ManagerServersComponent },
    {path : 'word', component: MsWordComponent },
    {path : 'not-found', component : NotFoundComponent},
    {path : '**', redirectTo: 'not-found' },
]

export const GTEC_ROUTING = RouterModule.forRoot(myRoutes);