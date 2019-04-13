$(function() {
    var categoryId = getQueryString("categoryid") || 0;
    var pageid = getQueryString("pageid") || 1;
    getCategory(categoryId);

    setProdcutList(categoryId, pageid);

    //商品分类函数
    function getCategory(categoryId) {
        $.ajax({
            type: 'get',
            url: "http://193.112.55.79:9090/api/getcategorybyid?categoryid=" + categoryId,
            dataType: 'json',
            success: function(data) {
                $('.breadcrumb > li:last-child').html(data.result[0].category);
            }
        });
    }

    //商品列表函数
    function setProdcutList(categoryId, pageid) {
        //发送ajax请求
        $.ajax({
            type: 'get',
            url: "http://193.112.55.79:9090/api/getproductlist",
            dataType: 'json',
            data: {
                "categoryid": categoryId,
                "pageid": pageid || 1
            },
            success: function(data) {    
                var page = data.totalCount / data.pagesize;          
                var pageli = "";

                //for循环生成页标签
                for (var i = 0; i < page; i++) {                   
                    var url = "productlist.html?categoryid=" + categoryId + "&pageid=" + (i + 1);
                    pageli += "<li><a href=" + url + ">第" + (i + 1) + "/" + (page) + "页</a></li>";
                }

                $('#dLabel').html("第" + pageid + "页" + '<span class="caret"></span>');

                //判断具体页数所在
                if (pageid <= 1) {
                    pageid = 2;
                } else if (pageid >= page) {
                    pageid = page - 1;
                }

                var prevUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (pageid - 1);
                var nextUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (parseInt(pageid) + 1);

                $('.page-prev').attr("href", prevUrl);
                $('.page-next').attr("href", nextUrl);
                
                $('.dropdown-menu').html(pageli);
                var html = template("productListTmp", data);
                $('.product-list').html(html);
            }
        })
    }
    
    //正则表达式获取参数名
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
});