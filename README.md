# antiaris-srms
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

静态资源管理系统(**SRMS**，**S**tatic **R**esource **M**anagement **S**ystem)。

考虑一个多页面 Web 应用包含以下 CSS/JS 文件：

|Name|page view|update frequency|file size|
|----|----|----|----|
|foo|10k|0.2|80|
|far|4k|0.05|40|
|mos|3k|0.15|60|
|rop|5k|0.1|20|
|sec|20k|0.01|100|

以一个时间段 _T_ 为期，考虑足够久的缓存时间，在每个文件单独引入的条件下，网络流量达到最小值：

|Name|Server|UA|
|----|----|----|
|foo|160Tk (T×0.2×80×10k)|16T (T×0.2×80)
|far|8Tk (T×0.05×40×4k)|2T (T×0.05×40)
|mos|27Tk (T×0.15×60×3k)|9T (T×0.15×60)
|rop|10Tk (T×0.1×20×5k)|2T (T×0.1×20)
|sec|20Tk (T×0.01×100×20k)|1T (T×0.01×100)

除非得到 HTTP2 的支持，否则在实际应用中不可能单独加载所有文件，这就需要将部分文件按照一定策略打包合并，减少 HTTP 请求数。那么如何组合这些静态资源，在请求数受限的情况下使得用户的缓存命中率最高？

下面是一种比较简单的统计模型：

<http://antiaris.github.io/antiaris-srms/>

在实际应用上，可能受到数据源、计算能力等因素限制，这里仅实现了文件更新频率维度的打包策略。

```js
const SRMS = require('antiaris-srms');
const srms = new SRMS({
    queryResMeta: (resName, type) => {
        const resMap = {
            'header.css': {
                frequency: 0.5,
                size: 100,
                resName: 'header.css',
                type: 'css'
            },
            'content.css': {
                frequency: 0.4,
                size: 50,
                resName: 'content.css',
                type: 'css'
            },
            'footer.css': {
                frequency: 0.02,
                size: 20,
                resName: 'footer.css',
                type: 'css'
            }
        };

        return resMap[resName];
    }
});

srms.add('header.css', 'css');
srms.add('content.css', 'css');
srms.add('footer.css', 'css');

srms.get('css');//[['header.css', 'content.css'], ['footer.css']]
```

[npm-url]: https://npmjs.org/package/antiaris-srms
[downloads-image]: http://img.shields.io/npm/dm/antiaris-srms.svg
[npm-image]: http://img.shields.io/npm/v/antiaris-srms.svg
[travis-url]: https://travis-ci.org/antiaris/antiaris-srms
[travis-image]: http://img.shields.io/travis/antiaris/antiaris-srms.svg
[david-dm-url]:https://david-dm.org/antiaris/antiaris-srms
[david-dm-image]:https://david-dm.org/antiaris/antiaris-srms.svg
[david-dm-dev-url]:https://david-dm.org/antiaris/antiaris-srms#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/antiaris/antiaris-srms/dev-status.svg

