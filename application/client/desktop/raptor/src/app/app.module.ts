import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
  ],
  imports: [
  HttpClientModule,
AdminModule
],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class Module { }