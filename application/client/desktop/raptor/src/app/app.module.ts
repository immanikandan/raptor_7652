import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TranslatorModule } from './translator/translator.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { TemplateModule } from './template/template.module';
import { SharedService } from '../shared/shared.service';

@NgModule({
  declarations: [
  ],
  imports: [
  FormsModule,
UserModule,
HomeModule,
SignupModule,
LoginModule,
TemplateModule,
FooterModule,
HeaderModule,
TranslatorModule,
AppRoutingModule,
BrowserAnimationsModule,
  HttpClientModule,
  AdminModule
],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class Module { }