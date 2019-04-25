window.onload = function () {
    var canvas = document.getElementById('gogogo');
    var ctx = canvas.getContext("2d");
    var cw, ch;
    var img = new Image();

    img.onload = start;
    img.crossOrigin = "Anonymous";
    img.src = 'https://i.ibb.co/84GzZbN/1379898570-3855760325.jpg';
    function start() {
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const self = this;
        canvas.addEventListener('mousemove', mousemove , false);
    }

    function mousemove(e) {
        // mousemove 各参数含义 https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent
            const x = e.offsetX;
            const y = e.offsetY;
            var ctx = this.getContext('2d');
            var data = ctx.getImageData(x,y,1,1);
            console.log('====================================');
            console.log(data.data);
            console.log('====================================');

            var resultView = document.getElementById('resultColor');
            resultView.style.backgroundColor = 'rgba('+[data.data[0],data.data[1],data.data[2],data.data[3]].join(',')+')';
    }
}