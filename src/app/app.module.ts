import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { FeedComponent } from '../components/feed/feed';
import { CategoryComponent } from './../components/category/category';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FeedPage } from '../pages/feed/feed';


import { StripHtmlTagsPipe } from '../pipes/strip-html-tags/strip-html-tags';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FluxProvider } from '../providers/flux/flux';
import { BookmarkProvider } from '../providers/bookmark/bookmark';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FeedComponent,
    CategoryComponent,
    StripHtmlTagsPipe,
    FeedPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FeedComponent,
    CategoryComponent,
    FeedPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FluxProvider,
    BookmarkProvider,
  ]
})
export class AppModule {}
