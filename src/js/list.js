require(['config'],function(){
    require(['jquery','common'],function($){console.log($)
        $('#headerbox').load('../html/header.html')
        $('#footerbox').load('../html/footer.html')
                let pageNo = 1;
                let qty = 15;
                list();
        window.onscroll =function(){
            let t =document.documentElement.scrollTop;console.log(t)
            let h =window.innerHeight;
            if(t >= document.documentElement.scrollHeight - h - 500){
                    pageNo++;
                    list();
            }
        }
        function list(){
            $.ajax({
                    url: '../api/goods.php',
                    type: 'get',
                    data: {
                        html:'list',
                        pageNo: pageNo,
                    },
                    dataType: 'json',
                    success:function(data){console.log(data)
                        var  ul =document.querySelector('.goods')
                        let cunfang = data.newdata.map(item=>{
                            return`
                                <li id="${item.id}">
                                    <div class="goods_list">
                                        <div class="goodsImg"> 
                                            <span class="icon"></span>
                                            <a href="#">
                                                <img src=${item.imgurl} />
                                            </a>
                                        </div>
                                        <div class="thumbbox">
                                            <div class="thumb-main clearfix">
                                                <ul class="clearfix">
                                                    <li>
                                                        <a href=""><img src=${item.imgurl1} /></a>
                                                    </li>
                                                    <li>
                                                        <a href=""><img src=${item.imgurl2} /></a>
                                                    </li>
                                                    <li>
                                                        <a href=""><img src=${item.imgurl3} /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="price">
                                            <span class="real-price">${item.price}</span>
                                            <del class="cost-price">388</del>
                                        </div>
                                        <div class="goodsName">
                                            <a href="#">${item.name}</a>
                                        </div>
                                        <div class="size-list">
                                            尺码：35、36、37、38、39、40
                                        </div>
                                    </div>
                                </li>
                            `
                        }).join('')
                            $('.goods').append(cunfang);
                             // 跳转页面传参数
                        data.newdata.map(function (item){
                            var res = document.getElementById(item.id);
                            console.log(res);
                            // 点击对象事件
                            res.onclick = function(){
                                // 遍历对象，把对象转为url参数格式
                                var params = '?';
                                for(var attr in item){
                                    params += attr + '=' + item[attr] + '&';
                                }
                                // 删除多余的&
                                params = params.slice(0,-1);
                                // 跳转页面
                                location.href = './goods.html' + params;
                            }       
                        });
                    }
                })
        }
        $('.sort').on('click',function(){
            list();
        })     
    })
})