require(['config'], function () {
    require(['jquery', 'common', 'mjCarousel'], function ($) {
        console.log($)
        $('#headerbox').load('../html/header.html')
        $('#footerbox').load('../html/footer.html')
        $('.focus').mjCarousel()

    })
})