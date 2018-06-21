'use strict';

import { Category } from './category';

describe('Models: Category', () => {

    it('initialises with values', () => {
        let c: Category = new Category('testCategory','color');

        expect(c.title).toEqual('testCategory');
        expect(c.color).toEqual('color');

    });

    it('increase id', () => {
        let c: Category = new Category('testCategory','color');
        let c2: Category = new Category('testCategory2','color2');

        expect(c2.id).toBeGreaterThan(c.id);

    });

});