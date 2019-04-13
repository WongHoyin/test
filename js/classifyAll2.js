$(function () {
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getbrandproductlist',
        data:$.getParameter(location.search),
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var htmlList=template('htmlList',result)
            $('.goodsList > ul').html(htmlList)

            // 将值存储到sessionStorage用于下个页面使用
            $('.goodscomm').on('tap',function(){
                var listInfo={
                    img:$(this).find('.listImg img').attr('src'),
                    describe:$(this).find('.mui-ellipsis-2').html()
                }           
                sessionStorage.setItem('listInfo',JSON.stringify(listInfo))

            })
        }
    })
})