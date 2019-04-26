window.onload = function () {
    // querySelector主要还是因为可以使用css选择符来查找节点
    var box = document.querySelector('#box');
    var small = document.querySelector('#small');
    var smallImage = document.getElementById('smallImage');
    var bigCanvas = document.getElementById('bigCanvas');
    var bigCtx = bigCanvas.getContext('2d');
    var adjustWidth = smallImage.naturalWidth/ 300;
    var adjustHeight = smallImage.naturalHeight / 300;
    //监听box的mousemove事件
    box.onmousemove = function (e) {
        //获取鼠标的x、y坐标。为什么要减去50呢？为了让鼠标刚好在small红色小方块的中心。
        var top = e.offsetY;
        var left = e.offsetX;
        if (left <= 2 || top <= 2) {
            return;
        }

        //动态设置small小方块的位置，让小方块跟随鼠标移动
        small.style.left = left + 'px';
        small.style.top = top + 'px';
        console.log(left+' + ' + top);

        // var newCanvas = document.createElement('canvas');
        // const newCtx = newCanvas.getContext('2d');
        // newCtx.drawImage(smallImage,0,0,100,100);
        // newCtx.beginPath();
        // newCtx.moveTo(left, top);
        // newCtx.lineTo(left+100, top);
        // newCtx.lineTo(left+100, top+100);
        // newCtx.lineTo(left, top+100);
        // newCtx.lineTo(left, top);
        // newCtx.closePath();
        // newCtx.clip();
        bigCtx.clearRect(0, 0, 300, 300);
        bigCtx.drawImage(smallImage, left*adjustWidth, top*adjustHeight, 100*adjustWidth, 100*adjustHeight, 0, 0, 300, 300);
    }
}