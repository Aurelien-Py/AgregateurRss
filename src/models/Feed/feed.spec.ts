'use strict';

import { Feed } from './feed';
import { Flux } from '../Flux/flux';
import { Category } from '../Category/category';

describe('Models: Feed', () => {

    it('initialises with values', () => {
        let c: Category = new Category('testCategory','color');
        let fl: Flux = new Flux('test','test.fr',c);
        let f: Feed = new Feed('Test','test.fr/test','lalalilalala', new Date(),'',fl);

        expect(f.title).toEqual('Test');
        expect(f.link).toEqual('test.fr/test');
        expect(f.description).toEqual('lalalilalala');

    });

    it('increase id', () => {
        let c: Category = new Category('testCategory','color');
        let fl: Flux = new Flux('test','test.fr',c);
        let f: Feed = new Feed('Test','test.fr/test','lalalilalala', new Date(),'',fl);
        let f2: Feed = new Feed('Test2','test.fr/test2','lalalilalala2', new Date(),'',fl);

        expect(f2.id).toBeGreaterThan(f.id);

    });

});