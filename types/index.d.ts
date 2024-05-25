export default interface PointIn {

    /**
     * 创建PointIn实例
     * @param x 点击点横坐标
     * @param y 点击点纵坐标
     */
    new(x?: number, y?: number): this

    /**
     * 设置点击点坐标
     * @param x 点击点横坐标
     * @param y 点击点纵坐标
     */
    setPoint(x: number, y: number): this

    /**
     * 判断是否在弧形中
     * @param cx 圆弧的圆心x坐标
     * @param cy 圆弧的圆心y坐标
     * @param r1 圆弧的内半径
     * @param r2 圆弧的外半径
     * @param beginDeg 开始弧度
     * @param deg 跨越弧度
     */
    arc(cx: number, cy: number, r1: number, r2: number, beginDeg: number, deg: number): boolean

    /**
     * 判断是否在圆中
     * @param cx 圆心x坐标
     * @param cy 圆心y坐标
     * @param r 圆的半径
     */
    circle(cx: number, cy: number, r: number): boolean

    /**
     * 判断是否在多边形中
     * @param points 参数格式：[[x1, y1], [x2, y2], ... ]，至少三个点
     */
    polygon(points: number[][]): boolean

    /**
     * 判断是否在矩形中
     * @param x 可选，区域左上角X坐标
     * @param y 可选，区域左上角y坐标
     * @param width 可选，区域的宽
     * @param height 可选，区域的高
     */
    rect(x: number, y: number, width: number, height: number): boolean
}