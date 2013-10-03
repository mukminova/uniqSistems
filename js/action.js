$(function() {

    $.fn.droplist = function() {
        var boxs = [];
        var $box_active;
        var $poplavok = $('.poplavok');
        var TITLE_HEIGHT = $poplavok.outerHeight(true);

        $(this).children(".droplist_block").each(function(index, element) {
            /*=create object==*/
            var box = new Object();
            box.element = element;
            var position = $(element).position();
            /*==save this posotion=*/
            box.top = position.top;
            box.bottom = position.top + $(element).outerHeight(true);
            /*== array objects  ==*/
            boxs[index] = box;
        });


        /*== event on scroll=*/
        $(this).scroll(function() {
            //poplavok fixed hight
            var poplavok_height = $(this).scrollTop();

            //loop
            for (var key in boxs) {
                if ($(this).scrollTop() > boxs[key].top)
                    if ($(this).scrollTop() < boxs[key].bottom) {

                        $box_active = $(boxs[key].element);

                        var different = $(this).scrollTop() - boxs[key].top + TITLE_HEIGHT;

                        var height = boxs[key].bottom - boxs[key].top;

                        if (different >= height) {
                            var dist = different - height;
                        }
                        else {
                            var dist = 0;
                        }
                        poplavok_height = poplavok_height - dist;
                    }
            }

            $poplavok.css('top', poplavok_height + 'px');
            var title = $box_active.children('.droplist_title').text();
            $poplavok.text(title);


        });
    };


    $('#droplist').droplist();


});