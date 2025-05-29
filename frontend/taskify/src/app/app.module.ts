import { PractiseComponent } from './../components/practise/practise.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LayoutContainerComponent } from 'src/components/layout-container/layout-container.component';
import { LoginComponent } from 'src/components/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TopicsComponent } from 'src/components/topics/topics.component';
import { JavascriptComponent } from 'src/components/javascript/javascript.component';
import { AngularComponent } from 'src/components/angular/angular.component';
import { ReactComponent } from 'src/components/react/react.component';
import { NodeComponent } from 'src/components/node/node.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from 'src/components/tasks/tasks.component';
import { NavComponent } from 'src/components/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'; 
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from 'src/components/register/register.component';
import { ExpressComponent } from 'src/components/express/express.component';
import { MatInputModule } from '@angular/material/input';
import { PostgresqlComponent } from 'src/components/postgresql/postgresql.component';
import { MongodbComponent } from 'src/components/mongodb/mongodb.component';
import { JavaComponent } from 'src/components/java/java.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NavComponent,
    LayoutContainerComponent,
    LoginComponent,
    RegisterComponent,
    PractiseComponent,
    TopicsComponent,
    JavascriptComponent,
    AngularComponent,
    ReactComponent,
    NodeComponent,
    ExpressComponent,
    PostgresqlComponent,
    MongodbComponent,
    JavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
