window.onload = function () {
    var box = document.querySelector('#box');
    var small = document.querySelector('#small');
    var big = document.querySelector('#big');
    var img = document.querySelector('#imgs');
    //监听box的mousemove事件
    box.onmousemove = function (e) {
        //获取鼠标的x、y坐标。为什么要减去50呢？为了让鼠标刚好在small红色小方块的中心。
        var top = e.clientY - 50;
        var left = e.clientX - 50;
        //限制small小方块移出box的范围
        if (top > 200) { top = 200 };
        if (top < 0) { top = 0 };
        if (left > 200) { left = 200 };
        if (left < 0) { left = 0 };
        //动态设置small小方块的位置，让小方块跟随鼠标移动
        small.style.left = left + 'px';
        small.style.top = top + 'px';
        // 让big里面的图片跟随鼠标的移动而移动。这里为什么要乘以（-3）呢？因为big里面的大图是box的3倍。鼠标在box上面向右移动1px，那么big里面的大图就要向左移动(1 x -3)px才能达到我们想要的效果。
        img.style.top = top * (-3) + 'px';
        img.style.left = left * (-3) + 'px';
    }
    //监听box的onmouseenter事件
    // box.onmouseenter = function (e) {
        //当鼠标进入box范围的时候，显示放大效果
        // big.style.display = 'block';
    // }
    //监听box的onmouseleave 事件
    // box.onmouseleave = function (e) {
        //当鼠标移出box范围的时候，隐藏放大效果
        // big.style.display = 'none';
    // }
}