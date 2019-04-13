$(function () {
    // 渲染一级菜单
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getbrandtitle',
        data: '',
        dataType: 'json',
        success: function (result) {
            var htmlList = template('htmlList', result)
            $('#mainList').html(htmlList)

            // 要渲染一级菜单后再渲染二级菜单
            render(result.result.length)
        }
    })
    // 遍历循环渲染所有二级菜单的所有内容
    function render(num) {
        for (let i = 0; i < num; i++) {
            $.ajax({
                type: 'get',
                url: 'http://193.112.55.79:9090/api/getbrand',
                data: { brandtitleid: i },
                dataType: 'json',
                success: function (result) {
                    console.log(result);
                    
                    var listcon = template('listcon', result)
                    $('#infocon ul li').eq(i).html(listcon)
                }
            })
        }
    }

    // $.ajax({
    //     type: 'get',
    //     url: 'http://193.112.55.79:9090/api/getbrand',
    //     data:{brandtitleid:0},
    //     dataType: 'json',
    //     success: function (result) {
    //         console.log(result);
    //     }
    // })
})