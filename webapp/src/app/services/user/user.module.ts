import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [UserService],
  imports: [HttpClientModule]
})
export class UserModule {}
