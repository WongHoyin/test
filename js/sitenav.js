$(function(){

    mui('body').on('tap', 'a', function (e) {
        e.preventDefault()
        window.top.location.href = this.href;
    });

    $.ajax({
        type:'get',
        url:'http://193.112.55.79:9090/api/getsitenav',
        dataType:'json',
        success:function(data){
            // console.log(data);
            var html=template('sitenavTemp',data);
            $('.sitenav_container').html(html);
        }
    })
})