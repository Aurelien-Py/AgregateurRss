import { Bookmark } from './bookmark';
import { Feed } from '../Feed/feed';
import { Flux } from '../Flux/flux';
import { Category } from '../Category/category';
'use strict';


describe('Models: Bookmark', () => {

    it('initialises with values', () => {
        let c: Category = new Category('testCategory','color');
        let fl: Flux = new Flux('test','test.fr',c);
        let f: Feed = new Feed('Test','test.fr/test','lalalilalala', new Date(),'',fl);
        let b: Bookmark = new Bookmark(f);

        expect(b.feed).toEqual(f);

    });

    it('increase id', () => {
        let c: Category = new Category('testCategory','color');
        let fl: Flux = new Flux('test','test.fr',c);
        let f: Feed = new Feed('Test','test.fr/test','lalalilalala', new Date(),'',fl);
        let b: Bookmark = new Bookmark(f);
        let b2: Bookmark = new Bookmark(f);

        expect(b2.id).toBeGreaterThan(b.id);

    });

});