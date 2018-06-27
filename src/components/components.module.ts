import { NgModule } from '@angular/core';
import { FeedComponent } from './feed/feed';
import { CategoryComponent } from './category/category';
//YE_BA
import { FluxComponent } from './flux/flux';
//YE_EA

@NgModule({
	declarations: [FeedComponent,
    CategoryComponent,
//YE_BA
    FluxComponent
//YE_EA
],
	imports: [],
	exports: [FeedComponent,
    CategoryComponent,
//YE_BA
    FluxComponent]
//YE_EA
})
export class ComponentsModule {}
