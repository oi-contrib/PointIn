export default function (x, y, width, height) {

    if (width < 0) {
        x += width;
        width *= -1;
    }

    if (height < 0) {
        y += height;
        height *= -1;
    }

    return this.x >= x && this.x <= x + width && this.y >= y && this.y <= y + height;
};