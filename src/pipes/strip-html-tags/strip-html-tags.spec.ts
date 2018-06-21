/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { StripHtmlTagsPipe } from './strip-html-tags';

describe('Pipe: StripHtmlTags', () => {
    it('create an instance', () => {
        let pipe = new StripHtmlTagsPipe();
        expect(pipe).toBeTruthy();
    });

    it('Remove html tags', () => {
        let pipe = new StripHtmlTagsPipe();
        let html = '<p>Bonjour</p>';
        let res = pipe.transform(html);

        expect(res).toEqual('Bonjour');
    });
});