'use strict';

import { Category } from './category';

describe('Models: Category', () => {

    it('initialises with values', () => {
        let c: Category = new Category('testCategory','color');

        expect(c.title).toEqual('testCategory');
        expect(c.color).toEqual('color');

    });

    it('Same id', () => {
        let c: Category = new Category('testCategory','color');
        let c2: Category = new Category('testCategory','color');

        expect(c2.id).toEqual(c.id);

    });

    it('Same id', () => {
        let c: Category = new Category('testCategory','color');
        let c2: Category = new Category('testCategory2','color2');

        expect(c2.id).not.toEqual(c.id);

    });

});