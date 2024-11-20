import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ParentRoutingModule } from './parent-routing.module';

@NgModule({
  declarations: [ParentComponent],
  imports: [CommonModule, ParentRoutingModule], 
})
export class ParentModule {} 
