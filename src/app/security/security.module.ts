import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { LogoutComponent } from './logout/logout.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  declarations: [LoginComponent, SiginComponent, LogoutComponent, IndexComponent]
})
export class SecurityModule { }
