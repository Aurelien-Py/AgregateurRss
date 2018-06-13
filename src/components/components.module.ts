import { NgModule } from '@angular/core';
import { FeedComponent } from './feed/feed';
import { CategoryComponent } from './category/category';
@NgModule({
	declarations: [FeedComponent,
    CategoryComponent],
	imports: [],
	exports: [FeedComponent,
    CategoryComponent]
})
export class ComponentsModule {}
