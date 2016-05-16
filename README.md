# antiaris-srms
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

静态资源管理系统(**SRMS**，**S**tatic **R**esource **M**anagement **S**ystem)。

考虑一个多页面 Web 系统包含以下 CSS 文件：

|Name|page view|update frequency|file size|
|----|----|----|----|
|foo|10k|0.2|80|
|far|4k|0.05|40|
|mos|3k|0.15|60|
|rop|5k|0.1|20|
|sec|20k|0.01|100|

以一个时间段 T 为期，上面示例各个文件的更新大小最小为：

|Name|Server|UA|
|----|----|----|
|foo|160Tk (T×0.2×80×10k)|16T (T×0.2×80)
|far|8Tk (T×0.05×40×4k)|2T (T×0.05×40)
|mos|27Tk (T×0.15×60×3k)|9T (T×0.15×60)
|rop|10Tk (T×0.1×20×5k)|2T (T×0.1×20)
|sec|20Tk (T×0.01×100×20k)|1T (T×0.01×100)

然而在实际应用中不可能（非HTTP2）单个加载，这就需要将这些 CSS 按照一定策略打包，减少 HTTP 请求数，那么如何组合这些静态资源，在请求数受限的情况下让用户的缓存命中率最高？

<http://antiaris.github.io/antiaris-srms/>


[npm-url]: https://npmjs.org/package/antiaris-srms
[downloads-image]: http://img.shields.io/npm/dm/antiaris-srms.svg
[npm-image]: http://img.shields.io/npm/v/antiaris-srms.svg
[travis-url]: https://travis-ci.org/antiaris/antiaris-srms
[travis-image]: http://img.shields.io/travis/antiaris/antiaris-srms.svg
[david-dm-url]:https://david-dm.org/antiaris/antiaris-srms
[david-dm-image]:https://david-dm.org/antiaris/antiaris-srms.svg
[david-dm-dev-url]:https://david-dm.org/antiaris/antiaris-srms#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/antiaris/antiaris-srms/dev-status.svg

