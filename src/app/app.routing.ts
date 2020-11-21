import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ManagerServersComponent } from './manager-servers/manager-servers.component';



const myRoutes : Routes = [
    {path :'', component : HomeComponent },
    {path : 'cv', component: CvComponent },
    {path : 'extra/servers', component: ManagerServersComponent }
]

export const GTEC_ROUTING = RouterModule.forRoot(myRoutes);