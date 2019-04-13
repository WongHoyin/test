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
        });
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