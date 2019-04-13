$(function () {
    getShop()
    getShopArea()
    getGoods(0, 0)
})

function getShop() {
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getgsshop",
        // data: "",
        dataType: "json",
        success: function (result) {
            var html = template('dianpunav', result)
            $('.dianpu').html(html)
            $('.dianpu select').on('change', function () {
                getGoods($(this).val(), 0)
                shopid = $(this).val()
            })
        }
    });
}

function getShopArea() {
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getgsshoparea",
        // data: "",
        dataType: "json",
        success: function (result) {
            var html = template('areanav', result)
            $('.area').html(html)
            $('。area select').on('change', function () {
                getGoods(0, $(this).val())
                areaid = $(this).val()
            })
        }
    });
}

function getGoods(shopid, areaid) {
    $.ajax({
        url: "http://193.112.55.79:9090/api/getgsproduct",
        data: {
            "shopid": shopid,
            "areaid": areaid
        },
        success: function (result) {
            var html = template("box", result);
            $('.goodsList').html(html);
        }
    })
}