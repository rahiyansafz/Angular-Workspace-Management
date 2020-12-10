import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WorkspaceService } from './workspace.service';
import { MatTabsModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatIconModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, NoopAnimationsModule, FormsModule, MatFormFieldModule, MatSelectModule, MatTabsModule, MatButtonModule, HttpClientModule, MatIconModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WorkspaceService]
})
export class AppModule { }
