mui('body').on('tap', 'a', function (e) {
    e.preventDefault()
    window.top.location.href = this.href;
});
var myScroll = new IScroll('.nav', {
    scrollX: true, //支持水平滑动
    scrollY: false //设置不支持垂直滑动
})