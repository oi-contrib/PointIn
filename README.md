# [PointIn](https://github.com/oi-contrib/PointIn)
计算点是否存在于几何体等中（纯粹的数值计算库）

<p>
    <a href="https://zxl20070701.github.io/toolbox/#/npm-download?packages=pointin&interval=7">
        <img src="https://img.shields.io/npm/dm/pointin.svg" alt="downloads">
    </a>
    <a href="https://www.npmjs.com/package/pointin">
        <img src="https://img.shields.io/npm/v/pointin.svg" alt="Version">
    </a>
    <a href="https://github.com/oi-contrib/PointIn" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/oi-contrib/PointIn?style=social">
    </a>
</p>

<img src="https://nodei.co/npm/pointin.png?downloads=true&amp;downloadRank=true&amp;stars=true" alt="NPM">

## 如何使用？

首先需要进行安装：

```
npm install --save pointin
```

然后在项目中引入：

```js
import PointIn from 'pointin'
```

当然，你也可以使用CDN的方式：

```html
<script src="https://unpkg.com/pointin"></script>
```

比如用户点击的点坐标是P(x,y)，那么直接创建判断对象：

```js
// 参数x,y可选
var pointIn = new PointIn(x, y);
```

点坐标是P(x,y)可以通过下面方法修改（可以调用无数次此方法）：

```js
pointIn.setPoint(x, y);
```

不同的图形提供了不同的判断方法，下面列出所有可以使用的API：

### 弧形 Arc

```js
/**
 * 判断是否在弧形中
 * @param cx 圆弧的圆心x坐标
 * @param cy 圆弧的圆心y坐标
 * @param r1 圆弧的内半径
 * @param r2 圆弧的外半径
 * @param beginDeg 开始弧度
 * @param deg 跨越弧度
 */
var isIn = pointIn.arc(cx, cy, r1, r2, beginDeg, deg);
```

### 圆 Circle

```js
/**
 * 判断是否在圆中
 * @param cx 圆心x坐标
 * @param cy 圆心y坐标
 * @param r 圆的半径
 */
var isIn = pointIn.circle(cx, cy, r);
```

### 多边形 Polygon

```js
/**
 * 判断是否在多边形中
 * @param points 参数格式：[[x1, y1], [x2, y2], ... ]，至少三个点
 */
var isIn = pointIn.polygon(points);
```
### 矩形 Rect

```js
/**
 * 判断是否在矩形中
 * @param x 可选，区域左上角X坐标
 * @param y 可选，区域左上角y坐标
 * @param width 可选，区域的宽
 * @param height 可选，区域的高
 */
var isIn = pointIn.rect(x, y, width, height);
```

## 版权

MIT License

Copyright (c) [zxl20070701](https://zxl20070701.github.io/notebook/home.html) 走一步，再走一步