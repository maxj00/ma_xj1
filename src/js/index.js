require(['config'],function(){
    require(['jquery',],function($){console.log($)
        $('#headerbox').load('../html/header.html')
        $('#footerbox').load('../html/footer.html')
    })
})