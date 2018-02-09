require(['config'],function(){
    require(['jquery','common'],function($){console.log($)
        $('#headerbox').load('../html/header.html')
        $('#footerbox').load('../html/footer.html')
                let pageNo = 1;
                let qty = 7;
        window.onscroll =function(){
            let t =document.documentElement.scrollTop;
            let h =window.innerHeight;
            if(t >= document.documentElement.scrollHeight - h){
                    pageNo++;
                $.ajax({
                    url: '../api/goods.php',
                    type: 'get',
                    data: {
                        html:'list',
                        pageNo: pageNo,
                        qty: qty,
                    },
                    dataType: 'json',
                    success:function(data){console.log(data)
                        var  ul =document.querySelector('.goods')
                        ul.innerHTML = data.map(item=>{
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
                                            <span class="real-price">￥188</span>
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
                             // 跳转页面传参数
                        data.map(function (item){
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
       
            // 懒加载
        //         let pageNo = 1;
        //         let qty = 7;
        // window.onscroll =function(){
        //     let t =document.documentElement.scrollTop;
        //     let h =window.innerHeight;
        //     if(t >= document.documentElement.scrollHeight - h){
        //             pageNo++;
        //         xhr.open('post','../api/football.php');

        //         xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        //         // POS请求发送数据
        //         xhr.send(`pageNo=${pageNo}&qty=${qty}`);
        //     }
        // }
    })
})