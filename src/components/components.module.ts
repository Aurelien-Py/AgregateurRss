import { NgModule } from '@angular/core';
import { FeedComponent } from './feed/feed';
import { CategoryComponent } from './category/category';
//YE_BA
import { ListFluxComponent } from './list-flux/list-flux';
//YE_EA

@NgModule({
	declarations: [FeedComponent,
    CategoryComponent,
//YE_BA
    ListFluxComponent
//YE_EA
],
	imports: [],
	exports: [FeedComponent,
    CategoryComponent,
//YE_BA
    ListFluxComponent]
//YE_EA
})
export class ComponentsModule {}
