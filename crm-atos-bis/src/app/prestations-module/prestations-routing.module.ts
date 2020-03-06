import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { DetailsComponent } from './components/details/details.component';
import { CommentsComponent } from './components/comments/comments.component';

//Alt + Maj + O ordonnancer
//router is a singleton can be initialized only on time
const routes: Routes = [
{ path: '', component: PagePrestationsComponent,
  data:{ title : 'Prestations', subtitles:'Toutes les prestations'},
  children : [
    {path: 'details', component: DetailsComponent },
    {path: 'comment', component: CommentsComponent }
  ]
},
{ path: 'add',
  component: PageAddPrestationComponent,
  data:{ title : 'Prestation', subtitles:'Ajouter une prestation'}
},
{ path: 'edit/:id',
  component: PageEditPrestationComponent,
  data:{ title : 'Prestation', subtitles:'Modification d\'une prestation'}
}
];

@NgModule({
  //enableTracing : to start troubleshooting router-related issues is to enable tracing, which will print out every single event in the console.
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
