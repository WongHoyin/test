$(function () {
  mmmav();

  function mmmav() {
    $.ajax({
      type: "get",
      url: "http://193.112.55.79:9090/api/getindexmenu",
      // data: '',
      dataType: "json",
      success: function (result) {
        // console.log(result.result);
        var html = template("listT", result);
        $(".pyg_nav").html(html);
        // var aa = result.result.splice(0, 8);
        // var flag = false;
        // console.log($(".pyg_nav > a:nth-child(8)"));
        $(".pyg_nav > div:nth-child(8)").on("click", function () {
          $(".pyg_nav > div:nth-last-child(-n+4)").toggle(200);
          console.log(123);
          // $('.pyg_nav > a:nth-child(1)')
        });
        $('.golist:nth-of-type(1)').on('tap', function () {
          window.location.href = "./views/compare.html"

        })
        $('.golist:nth-of-type(2)').on('tap', function () {
          window.location.href = "./views/moneyctrl.html"

        })
        $('.golist:nth-of-type(3)').on('tap', function () {
          window.location.href = "./views/inlanddiscoun.html"

        })
        $('.golist:nth-of-type(4)').on('tap', function () {
          window.location.href = "./views/inexpensive.html "

        })
        $('.golist:nth-of-type(5)').on('tap', function () {
          window.location.href = "./views/shoppingDiscounts.html"

        })
        $('.golist:nth-of-type(6)').on('tap', function () {
          window.location.href = "./views/youhuijuan.html"

        })
        $('.golist:nth-of-type(7)').on('tap', function () {
          window.location.href = "./views/moneyctrl.html"

        })
        $('.golist:nth-of-type(9)').on('tap', function () {
          window.location.href = "./views/gatherItem.html"

        })
        $('.golist:nth-of-type(10)').on('tap', function () {
          window.location.href = "./views/moneyctrl.html"

        })
        $('.golist:nth-of-type(11)').on('tap', function () {
          window.location.href = "./views/sitenav.html"

        })
        $('.golist:nth-of-type(12)').on('tap', function () {
          window.location.href = "./views/procucts.html"

        })

      }
    });
  }
  goodLists();

  function goodLists() {
    $.ajax({
      type: "get",
      url: "http://193.112.55.79:9090/api/getmoneyctrl",
      // data: '',
      dataType: "json",
      success: function (result) {
        // console.log(result);
        var html = template("listCT", result);
        $(".goodslist").html(html);
      }
    });
  }
  mui(".mui-scroll-wrapper").scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    indicators: false //是否显示滚动条，默认为True
  });
});