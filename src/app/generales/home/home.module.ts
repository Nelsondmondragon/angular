import { ShowpipesComponent } from './../showpipes/showpipes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MypipePipe } from '../pipes/mypipe.pipe';
import { ShowDirectivesComponent } from '../show-directives/show-directives.component';
import { MydirectiveDirective } from '../directives/mydirective.directive';

@NgModule({
  declarations: [
    HomeComponent,
    ShowpipesComponent,
    MypipePipe,
    ShowDirectivesComponent,
    MydirectiveDirective,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
