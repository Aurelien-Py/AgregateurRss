import { NgModule } from '@angular/core';
import { FeedComponent } from './feed/feed';
import { CategoryComponent } from './category/category';
//YE_BA
import { FluxComponent } from './flux/flux';
import { SiteComponent } from './site/site';
//YE_EA

@NgModule({
	declarations: [FeedComponent,
    CategoryComponent,
//YE_BA
    FluxComponent,
    SiteComponent,
    SiteComponent
//YE_EA
],
	imports: [],
	exports: [FeedComponent,
    CategoryComponent,
//YE_BA
    FluxComponent,
    SiteComponent,
    SiteComponent]
//YE_EA
})
export class ComponentsModule {}
