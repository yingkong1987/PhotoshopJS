window.onload = function () {
    // querySelector主要还是因为可以使用css选择符来查找节点
    var box = document.querySelector('#box');
    var small = document.querySelector('#small');
    var smallImage = document.getElementById('smallImage');
    var bigCanvas = document.getElementById('bigCanvas');
    var bigCtx = bigCanvas.getContext('2d');
    //监听box的mousemove事件
    box.onmousemove = function (e) {
        //获取鼠标的x、y坐标。为什么要减去50呢？为了让鼠标刚好在small红色小方块的中心。
        var top = e.clientY - 50;
        var left = e.clientX - 50;
        // //限制small小方块移出box的范围
        // if (top > 200) { top = 200 };
        // if (top < 0) { top = 0 };
        // if (left > 200) { left = 200 };
        // if (left < 0) { left = 0 };
        //动态设置small小方块的位置，让小方块跟随鼠标移动
        small.style.left = left + 'px';
        small.style.top = top + 'px';
        bigCtx.clearRect(0, 0, 300, 300);
        // bigCtx.drawImage(smallImage,left, top, 100, 100, 0, 0, 300, 300);
        bigCtx.drawImage(smallImage,left,top);
    }
}