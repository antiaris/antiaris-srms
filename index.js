/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-05-14[16:46:45]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';

const _ = require('lodash');

class SRMS {
    constructor(options) {
        this.__res = {};
        this.opts = _.extend({
            properties: [],
            queryResMeta: () => ({})
        }, options);
    }
    add(resName, type) {
        if (!Array.isArray(this.__res[type])) {
            this.__res[type] = [];
        }
        if (this.__res[type].indexOf(resName) === -1) {
            this.__res[type].push(resName);
        }
        return this;
    }
    get(type) {
        return this.__res[type];
    }
}

module.exports = SRMS;