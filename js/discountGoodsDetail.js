$(function () {
    
    // 生成动态结构，渲染页面
    $.ajax({
        type:'get',
        url:'http://193.112.55.79:9090/api/getdiscountproduct',
        data:getParam(location.search),
        dataType:'json',
        success:function(data){
            // console.log(data);
            var html = template('dicountDetailTemp',data);
            $('.slowbuy_content').html(html);
        }
    })

    // 从url地址栏中获取参数
    function getParam(url){
        var obj={};
        var url=url.substring(1); //'name=jack&age=1'
        // console.log(url);
        var arr=url.split('&');//[name=jack,age=1]
        // console.log(arrs);
        for(var i=0;i<arr.length;i++){
            var temp=arr[i].split('=');//[name,jack]
            obj[temp[0]]=temp[1];
        }
        return obj;
    }




    
})