# antiaris-srms
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

静态资源管理系统(**SRMS**，**S**tatic **R**esource **M**anagement **S**ystem)。

考虑一个多页面 Web 系统包含以下 CSS 文件：

|Name|page view(pv)|update frequency(uf)|file size(fs)|
|----|----|----|----|
|foo|10k|0.2|80|
|far|3k|0.05|40|
|mos|8k|0.15|60|
|rop|7k|0.1|20|
|sec|12k|0.01|100|

如何组合这些静态资源，让用户的缓存命中率最高？

以一个时间段 T 为期，上面的问题可以理解为如何分组可以使用户的下载量最小。上面示例文件的更新大小为：

|Name|file size reload(fsr)|
|----|----|
|foo|160Tk (T×0.2×80×10k)|
|far|6Tk (T×0.05×40×3k)|
|mos|72Tk (T×0.15×60×8k)|
|rop|14Tk (T×0.1×20×7k)|
|sec|12Tk (T×0.01×100×12k)|

下面考虑单个页面引入的 CSS 链接数不宜过多，假设为5，可将正整数域划分为5个范围，如 `0~50`、`50~150`、`150~250`、`250~400`、`400~∞`，将落在不同区域的文件分成一组：

1. foo
2. far+rop+sec
3. mos


[npm-url]: https://npmjs.org/package/antiaris-srms
[downloads-image]: http://img.shields.io/npm/dm/antiaris-srms.svg
[npm-image]: http://img.shields.io/npm/v/antiaris-srms.svg
[travis-url]: https://travis-ci.org/antiaris/antiaris-srms
[travis-image]: http://img.shields.io/travis/antiaris/antiaris-srms.svg
[david-dm-url]:https://david-dm.org/antiaris/antiaris-srms
[david-dm-image]:https://david-dm.org/antiaris/antiaris-srms.svg
[david-dm-dev-url]:https://david-dm.org/antiaris/antiaris-srms#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/antiaris/antiaris-srms/dev-status.svg

