$(function () {
    var myScroll = new IScroll('.navbanner', {
        scrollX: true, //支持水平滑动
        scrollY: false //设置不支持垂直滑动
    })
    // 渲染导航栏
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getbaicaijiatitle',
        data: '',
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var htmlNav = template('htmlNav', result)
            $('.navbanner ul').html(htmlNav)
            render()
        }
    })
    // 渲染商品列表
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getbaicaijiaproduct',
        data: { titleid: 1 },
        dataType: 'json',
        success: function (result) {
            var htmlList = template('htmlList', result)
            $('.main').html(htmlList)
        }
    })

    function render() {
        // 拿到每个li的宽度叠加起来设置成ul的宽度
        // ps:由于无法计算margin值所以手动添加+11
        var liW = 0;
        $('.navbanner ul li').each(function (index, value) {
            liW += $(this).width()+11           
        });
        $('.navbanner ul').width(liW)

        // 点击再次渲染商品列表
        $('.navbanner ul li').on('tap', function () {
            $(this).addClass('checked').siblings().removeClass('checked')
            $.ajax({
                type: 'get',
                url: 'http://193.112.55.79:9090/api/getbaicaijiaproduct',
                data: { titleid: $(this).data('titleid') },
                dataType: 'json',
                success: function (result) {
                    var htmlList = template('htmlList', result)
                    $('.main').html(htmlList)
                }
            })
        })
    }
})