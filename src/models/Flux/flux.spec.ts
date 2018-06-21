'use strict';

import { Flux } from './flux';
import { Category } from '../Category/category';

describe('Flux', () => {

    it('initialises with defaults', () => {
        let c: Category = new Category('testCategory','color');
        let f: Flux = new Flux('test','test.fr',c);

        expect(f.title).toEqual('test');
        expect(f.link).toEqual('test.fr');
        expect(f.category).toEqual(c);


    });

});