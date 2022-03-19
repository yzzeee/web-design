$('.btns>a').on('click', function () {
    $.each(this.parentElement.children, (idx, ele) => {
        if (this === ele) {
            $(ele).addClass('active');
            $(`.tabs>div:nth-child(${idx+1})`).show();
        } else {
            $(ele).removeClass('active');
            $(`.tabs>div:nth-child(${idx+1})`).hide();
        }
    });
});