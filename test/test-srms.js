/**
 * Copyright (C) 2016 yanni4night.com
 * test-srms.js
 *
 * changelog
 * 2016-05-14[16:51:30]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */

const SRMS = require('../');
const assert = require('assert');

describe('srms', () => {
    const resourceMap = {};
    for (let i = 0; i < 15; ++i) {
        resourceMap[`foo_${i}`] = {
            frequency: (0.99 * Math.random()).toFixed(2),
            size: (Math.random() * 200) | 0
        };
    }
    describe('#io', () => {
        it('get input', () => {
            const srms = new SRMS({
                queryResMeta: resName => {
                    return resourceMap[resName];
                }
            });
            Object.keys(resourceMap).forEach(resName => {
                srms.add(resName, 'css');
            });

            const result = srms.get('css');
            console.log(result);
            //assert.deepEqual(, ['index.css', 'header.css']);
        });
    });
});