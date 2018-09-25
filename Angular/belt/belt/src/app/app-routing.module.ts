import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetIndexComponent } from './pets/pet-index/pet-index.component';
import { PetCreateComponent } from './pets/pet-create/pet-create.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';

const routes: Routes = [
  { path: '',component: PetListComponent},
  { path: 'new', component: PetCreateComponent},
  { path: 'edit/:petId', component: PetCreateComponent},
  { path: ':petId', component: PetIndexComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
