require(['config'],function(){
    require(['jquery','common','gdszoom'],function($){console.log($)
        $('#headerbox').load('../html/header.html')
        $('#footerbox').load('../html/footer.html')
        // 放大镜啊啊啊啊啊啊啊啊啊啊啊啊
                $('.goodsimg').gdsZoom({
                });
                $('.smallListbox').on('click','img',function(){
                    $('.goodsimg img').attr({
                        src:this.src,
                        'data-big':this.dataset.big || this.src
                    })
                })
                var params = location.search;
                params = params.slice('1');
                params = params.split('&');
                var goods = [];
                params.forEach(function(item){
                    var arr = item.split('=');
                    goods[arr[0]] = decodeURI(arr[1]);
                });
                var name =document.querySelector('.name');
                var name1 =document.querySelector('h2');
                var price =document.querySelector('.real-price');
                var cost =document.querySelector('.cost-price');
                var currentImg =document.querySelector('.currentImg');
                var smallgoods1 =document.querySelector('.smallgoods1');
                var smallgoods2 =document.querySelector('.smallgoods2');
                var smallgoods3 =document.querySelector('.smallgoods3');
                name.innerHTML = goods.name;
                name1.innerHTML = goods.name;
                price.innerHTML =goods.price;
                cost.innerHTML =goods.cost;
                currentImg.src =goods.imgurl;
                smallgoods1.src =goods.imgurl1;
                smallgoods2.src =goods.imgurl2;
                smallgoods3.src =goods.imgurl3;
                     // 跳转页面传参数
                    var res = document.querySelector('#t-buy');
                    res.onclick = function(){
                        // 跳转页面
                        location.href = './car.html';
                    }
                    var addcar = document.querySelector('#addcar');
                    // 点击对象事件
                    var aa=0;
        $('#addcar').on('click',function(){console.log(goods)
                    aa++;
                    var id =goods.id;
                var num =document.querySelector('.num');
                var num1 =num.value*1;
                var price =goods.price;
                var goodsName = goods.name;
                var imgurl =goods.imgurl;
                $.ajax({
                                url: `../api/car.php`,
                                data: {
                                    id: id,
                                    name: goodsName,
                                    price: price,
                                    imgurl: imgurl,
                                    num: num1*aa,
                                    category: 'car'
                                },
                                success:function(){
                                }
                })
                // 飞入购物车
                var $goodsimg =$('.goodsimg'); console.log($goodsimg)    
                var $img = $goodsimg.children('img');
                var $car = $('.car');
                // 1>复制当前商品图片(目的：用于实现动画效果)
                var $copyImg = $img.clone();

                // 设定图片样式
                $copyImg.css({
                                position:'absolute',
                                left:$img.offset().left,
                                top:$img.offset().top,
                                width:$img.outerWidth()
                });
                            // 把图片写入页面
                    $('body').append($copyImg);
                    // 动画
                    $copyImg.animate({
                        left:$car.offset().left,
                        top:$car.offset().top + $car.height() - 50,
                        width:30
                        },function(){
                            // 动画完成后
                            // 删除复制的图片
                            $copyImg.remove();
                        })
        })
    })
})