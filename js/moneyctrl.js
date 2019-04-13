$(function () {
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    indicators: false //是否显示滚动条，默认为True
  });
  moneyC(0)
  // 
  function moneyC(id) {
    $.ajax({
      type: 'get',
      url: 'http://193.112.55.79:9090/api/getmoneyctrl',
      data: {
        'pageid': id
      },

      dataType: 'Json',
      success: function (result) {
        console.log({
          'pageId': id
        });

        console.log(JSON.parse(result));
        var html = template('moneyTl', JSON.parse(result))
        // console.log(html);
        $('.goodslist').data('id', id)
        // console.log(data('id', id));

        $('.goodslist').html(html)
      }

    })
  }
  $('.page-prev').on('tap', function () {
    var dataId = $('.goodslist').data('id')
    if (dataId != 0) {
      dataId--
    } else {
      dataId == 0
    }
    console.log(dataId);

    moneyC(dataId)
  })
  $('.page-next').on('tap', function () {
    var dataId = $('.goodslist').data('id')
    if (dataId < 9) {
      dataId++
    } else(
      dataId == 9
    )
    console.log(dataId);

    moneyC(dataId)
  })
  $('.dropdown').on('click', function () {
    $('.dropdown-menu').toggle(200);
  })

})