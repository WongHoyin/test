$(function () {
    // iScroll初始化
    $('#footer .right').on('tap', function () {
        mui('#main .mui-scroll-wrapper').scroll().scrollTo(0, 0, 800);//100毫秒滚动到顶
    });

    // mui区域滚动初始化
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    // 获取折扣商品列表数据，生成动态结构
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getinlanddiscount',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            var html = template('discountListTemp', data);
            $('.discountList').html(html);
        }
    })   

    // 点击返回顶部
    $('.backTop').on('tap', function () {
        // 快速回滚到该区域顶部
        mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 100);//100毫秒滚动到顶
    })

})