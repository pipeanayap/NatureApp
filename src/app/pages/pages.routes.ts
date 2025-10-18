import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { InicioComponent } from "./inicio-component/inicio-component";
import { PlacesComponent } from "./places-component/places-component";
import { PlacesDetailComponent } from "./places-detail-component/places-detail-component";
import { TrailComponent } from "./trail-component/trail-component";


export const routes : Routes = [
    {
        path: "admin",
        component : AdminLayout,
        children: [
            {
                path:"inicio",
                component: InicioComponent
            },
            {
                path:"places",
                component : PlacesComponent
            },
            {
                path:"places/:id",
                component : PlacesDetailComponent
            },
            {
                path:"trails",
                component:TrailComponent
            },
            {
                path: "",
                pathMatch: "full",
                redirectTo: "inicio"
            }
           
        ]
    }
]