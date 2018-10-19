import { PipesModule } from './../pipes/pipes.module';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { FeedComponent } from '../components/feed/feed';
import { CategoryComponent } from './../components/category/category';

import { FluxComponent } from './../components/flux/flux';
import { SiteComponent } from '../components/site/site';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { CategoriesPage } from '../pages/categories/categories';

import { ListFluxPage } from '../pages/list-flux/list-flux';

import {BookmarksPage} from '../pages/bookmarks/bookmarks';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FluxProvider } from '../providers/flux/flux';
import { BookmarkProvider } from '../providers/bookmark/bookmark';
import { CategoryProvider } from '../providers/category/category';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PropositionOfFluxPage } from '../pages/proposition-of-flux/proposition-of-flux';
import { SiteProvider } from '../providers/site/site';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedComponent,
    CategoryComponent,
    FeedPage,
    CategoriesPage,
    ListFluxPage,
    FluxComponent,
    BookmarksPage,
    PropositionOfFluxPage,
    SiteComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    PipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedComponent,
    CategoryComponent,
    FeedPage,
    CategoriesPage,
    ListFluxPage,
    FluxComponent,
    BookmarksPage,
    PropositionOfFluxPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FluxProvider,
    BookmarkProvider,
    CategoryProvider,
    SiteProvider,
  ]
})
export class AppModule {}
