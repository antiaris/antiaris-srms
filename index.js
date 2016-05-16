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
            queryResMeta: (resName, type) => ({
                frequency: 0.5,
                size: 100,
                resName,
                type
            }),
            defaultMax: 3
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
    get(type, max) {
        const solutions = [];

        if (!_.isInteger(max) || max < 1) {
            max = this.opts.defaultMax;
        }

        const sortedResMeta = this.__res[type].map(resName => {
            return this.opts.queryResMeta(resName, type);
        }).sort((prev, next) => {
            if (prev.frequency > next.frequency) {
                return 1;
            } else if (prev.frequency < next.frequency) {
                return -1;
            } else {
                return prev.resName > next.resName ? 1 : -1;
            }
        });

        const itemsPerSeg = Math.ceil(sortedResMeta.length / max);

        for (let i = 0; i < max; ++i) {
            solutions.push(sortedResMeta.slice(i * itemsPerSeg, (i + 1) * itemsPerSeg));
        }

        return solutions;
    }
}

module.exports = SRMS;