$(function () {

    // 为所有a绑定tap事件
    mui('body').on('tap', 'a', function (e) {
        e.preventDefault()
        window.top.location.href = this.href;
    });

    // iscroll初始话
    var myScroll = new IScroll('.nav', {
        scrollX: true, //支持水平滑动
        scrollY: false //设置不支持垂直滑动
    })
	
	function getParameter(url) {
        var obj = {}
        //如果第一个字符串是问号就删了问号
        if(url.indexOf('?')==0){
            url = url.substring(1)
        }
        var arr = url.split('&')
        for (var i = 0; i < arr.length; i++) {
            var temp = arr[i].split('=')
            obj[temp[0]] = temp[1]
        }
        return obj
    }
    $.getParameter = getParameter
})