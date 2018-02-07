require(['config'],function(){
    require(['jquery','common','mjCarousel'],function($){console.log($)
        $('#headerbox').load('../html/header.html')
        $('#footerbox').load('../html/footer.html')
        $('.focus').mjCarousel()
        // $.ajax({
        //     url: '../api/list.php',
        //     type: 'get',
        //     dataType: 'json',
        //     data: {
        //         category:'log',
        //         category:'yundong1'
        //     },
        //     success:function(data){console.log(data)
        //         var ul =document.querySelector('.f1-brand');
        //         ul.innerHTML =data.map(item=>{
        //             for(var attr in item){
        //                 var log ='';
        //                 log += item[attr];
        //             }
        //             log = log.slice(0, 5);console.log(log)
        //         }).join('')
        //     }
        // })
        $.ajax({
            url: '../api/list.php',
            type: 'get',
            dataType: 'json',
            data: {
                category:'log',
            },
            success:function(data){console.log(data)
                var ul1 =document.querySelector('.f1-brand');
                var ul2 =document.querySelector('.f2-brand');
                ul1.innerHTML =data.map(item=>{
                    return`
                        <li id="${item.id}">
                            <a href="#"><img src=${item.imgurl} /></a>
                        </li>
                    `
                }).join('')
                ul2.innerHTML =data.map(item=>{
                    return`
                        <li id="${item.id}">
                            <a href="#"><img src=${item.imgurl} /></a>
                        </li>
                    `
                }).join('')
                data.map(function (item){
                    var res = document.getElementById(item.id);
                    console.log(res);
                    // 点击对象事件
                    res.onclick = function(){
                        location.href = '../html/list.html';
                    }       
                });
            }
        })
        $.ajax({
            url: '../api/list.php',
            type: 'get',
            dataType: 'json',
            data: {
                category:'yundong1'
            },
            success:function(data){console.log(data)
                var ul =document.querySelector('.goods-small');
                ul.innerHTML =data.map(item=>{
                    return`
                        <li id="${item.id}">
                            <a href="#"><img src=${item.imgurl} /></a>
                        </li>
                    `
                }).join('')
                data.map(function (item){
                    var res = document.getElementById(item.id);
                    console.log(res);
                    // 点击对象事件
                    res.onclick = function(){
                        location.href = '../html/list.html';
                    }       
                });
            }
        })
        $.ajax({
            url: '../api/list.php',
            type: 'get',
            dataType: 'json',
            data: {
                category:'yundongb'
            },
            success:function(data){console.log(data)
                var ul =document.querySelector('.goods-big');
                ul.innerHTML =data.map(item=>{
                    return`
                        <li id="${item.id}">
                            <a href="#"><img src=${item.imgurl} /></a>
                        </li>
                    `
                }).join('')
                data.map(function (item){
                    var res = document.getElementById(item.id);
                    console.log(res);
                    // 点击对象事件
                    res.onclick = function(){
                        location.href = '../html/list.html';
                    }       
                });
            }
        })
        $.ajax({
            url: '../api/list.php',
            type: 'get',
            dataType: 'json',
            data: {
                category:'gaogen'
            },
            success:function(data){console.log(data)
                var ul =document.querySelector('.goods-small2');
                ul.innerHTML =data.map(item=>{
                    return`
                        <li id="${item.id}">
                            <a href="#"><img src=${item.imgurl} /></a>
                        </li>
                    `
                }).join('')
                data.map(function (item){
                    var res = document.getElementById(item.id);
                    console.log(res);
                    // 点击对象事件
                    res.onclick = function(){
                        location.href = '../html/list.html';
                    }       
                });
            }
        })
        $.ajax({
            url: '../api/list.php',
            type: 'get',
            dataType: 'json',
            data: {
                category:'gaogenb'
            },
            success:function(data){console.log(data)
                var ul =document.querySelector('.goods-big2');
                ul.innerHTML =data.map(item=>{
                    return`
                        <li id="${item.id}">
                            <a href="#"><img src=${item.imgurl} /></a>
                        </li>
                    `
                }).join('')
                data.map(function (item){
                    var res = document.getElementById(item.id);
                    console.log(res);
                    // 点击对象事件
                    res.onclick = function(){
                        location.href = '../html/list.html';
                    }       
                });
            }
        })
    })
})