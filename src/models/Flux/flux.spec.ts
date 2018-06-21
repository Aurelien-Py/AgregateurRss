'use strict';

import { Flux } from './flux';
import { Category } from '../Category/category';

describe('Models: Flux', () => {

    it('initialises with values', () => {
        let c: Category = new Category('testCategory','color');
        let f: Flux = new Flux('test','test.fr',c);

        expect(f.title).toEqual('test');
        expect(f.link).toEqual('test.fr');
        expect(f.category).toEqual(c);


    });

    it('increase id', () => {
        let c: Category = new Category('testCategory','color');
        let f: Flux = new Flux('test','test.fr',c);
        let f2: Flux = new Flux('test2','test2.fr',c);

        expect(f2.id).toBeGreaterThan(f.id);

    });

});