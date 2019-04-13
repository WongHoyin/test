$(function () {
	setCoupon($('.coupon-title'))

	function setCoupon(dom, callback) {
		$.ajax({
            type: 'get',
			url: "http://193.112.55.79:9090/api/getcoupon",
            dataType: 'json',
			success: function (data) {
				var html = template('couponTitle', data);
				dom.html(html);
			}
		})
	}
})