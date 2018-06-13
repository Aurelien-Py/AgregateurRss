import { NgModule } from '@angular/core';
import { StripHtmlTagsPipe } from './strip-html-tags/strip-html-tags';
@NgModule({
	declarations: [StripHtmlTagsPipe],
	imports: [],
	exports: [StripHtmlTagsPipe]
})
export class PipesModule {}
