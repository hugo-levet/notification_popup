function popup(texte, classPopup = '') {
    if ($('#popup')[0] == undefined) {
        $('body').append(
            $('<div />')
                .attr('id', 'popup')
        );
    }
    // let color = "#" + Math.floor(Math.random() * 16777215).toString(16);

    $('#popup').append(
        $('<div />')
            .attr('class', classPopup).html(texte)
            .attr('notification-popup', 'open')
            .fadeIn(200)
            // .css('border-left-color', color)
    )

    setTimeout(function () {
        $('#popup>div:not([notification-popup="close"])').eq(0)
            .attr('notification-popup', 'close')
            .fadeOut(200);
    }, 4500);
}
