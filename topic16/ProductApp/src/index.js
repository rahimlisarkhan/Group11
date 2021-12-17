$(document).ready(function () {

    let hamMenuToggle = false

    //Ham Toggle Menu
    $('#hamMenu').on('click', function () {
        if (!hamMenuToggle) {
            hamMenuToggle = true
            $("#formContent").animate({
                width: '0%',
            })
            $("#formContent form").css({
                display: "none"
            })
            $("#productContent").animate({
                width: '100%'
            })
        } else {
            hamMenuToggle = false
            $("#productContent").animate({
                width: '70%'
            })
            $("#formContent").animate({
                width: '30%',
            })
            $("#formContent form").css({
                display: "block"
            })
          
        }
    })


})