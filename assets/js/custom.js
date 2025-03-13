$(function() {
    $('.register-trial').magnificPopup({
        type: 'inline',
        closeOnBgClick: true,
    });

    $('.btn-register').on('click', function(e) {
        e.preventDefault();
        
        const form = $('form[name=form_register]');
        const name = form.find('[name=name]').val();
        const phone = form.find('[name=phone]').val();
        const email = form.find('[name=email]').val();
        const shopName = form.find('[name=shop_name]').val();

        if (!name) return toastr.warning('Vui lòng nhập tên khách hàng!');
        if (!phone) return toastr.warning('Vui lòng nhập số điện thoại!');
        if (!email) return toastr.warning('Vui lòng nhập email!');
        if (!shopName) return toastr.warning('Vui lòng nhập tên cửa hàng!');

        return toastr.success('Đăng ký thông tin thành công, vui lòng chờ đợi phản hồi của chúng tôi!');
    });
});