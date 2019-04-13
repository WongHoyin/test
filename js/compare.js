$(function () {
    setCategoryTitle();

    function setCategoryTitle() {
        //发送ajxj请求，渲染各分类大标题
        $.ajax({
            type: 'get',
            url: "http://193.112.55.79:9090/api/getcategorytitle",
            dataType: 'json',
            success: function (data) {
                var html = template("categoryTitleTmp", data);
                $("#category > .panel-group").html(html);

                var categoryTitle = $("#category > .panel-group > .panel-default > .panel-heading > h4 > a");
                // 大分类标题单击事件
                categoryTitle.on("click", function (e) {
                    var titleId = $(this).data("titleid");

                    // 发送ajxj请求，渲染二级分类
                    $.ajax({
                        type: 'get',
                        url: "http://193.112.55.79:9090/api/getcategory?titleid=" + titleId,
                        dataType: 'json',
                        success: function (data) {
                            var html = template("categoryTmp", data);
                            var panelBody = $(e.target).parent().parent().parent().find(".panel-collapse").find('.panel-body');
                            panelBody.html(html);
                            var categoryList = panelBody.find('.row > div');
                            var count = categoryList.length % 3 || 3;
                            panelBody.find(".row > div:nth-last-child(-n+" + count + ")").css("border-bottom", "0");
                        }
                    })
                });
            }
        })
    }
})