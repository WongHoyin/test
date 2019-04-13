$(function () {
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getproductcom',
        data: $.getParameter(location.search),
        dataType: 'json',
        success: function (result) {
            console.log(JSON.parse(sessionStorage.getItem('listInfo')));
            
           
            var obj=JSON.parse(sessionStorage.getItem('listInfo'))
            sessionStorage.removeItem('listInfo')
            var htmlcomm=template('htmlcomm',{result:result.result,obj:obj})         
            $('.comments').html(htmlcomm)
        }
    })
})
