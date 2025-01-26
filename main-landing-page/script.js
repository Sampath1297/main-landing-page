$(document).ready(function() {
    $('.count').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count'),
            start = parseInt($this.text());

        $({ countNum: start }).animate({
            countNum: countTo
        },
        {
            duration: 500,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum)).addClass('falling-effect');
            },
            complete: function() {
                $this.text(this.countNum).addClass('falling-effect');
            }
        });
    });
});