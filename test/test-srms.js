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
    describe('#io', () => {
        it('get input', () => {
            const srms = new SRMS();
            srms.add('index.css', 'css');
            srms.add('header.css', 'css');
            assert.deepEqual(srms.get('css'), ['index.css', 'header.css']);
        });
    });
});