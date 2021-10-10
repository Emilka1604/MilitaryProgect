{
    $(".menu__list > li").on({
        "mouseover": function () {
            $(this).find(".sub-menu__list").addClass("_active")
        },
        "mouseout": function () {
            $(this).find(".sub-menu__list").removeClass("_active")
        }
    })

    $(".sub-menu__list > li").on({
        "mouseover": function () {
            $(this).find(".sub-sub-menu__list").addClass("_active")
        },
        "mouseout": function () {
            $(this).find(".sub-sub-menu__list").removeClass("_active")
        }
    })

    $('#exit').on('click', () => {
        require('nw.gui').App.quit()
    })
}




