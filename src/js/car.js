require(['config'],function(){
    require(['jquery','common','gdszoom'],function($){console.log($)
        $('#headerbox').load('../html/header.html')
        $('#footerbox').load('../html/footer.html')
        var params = location.search;
        params = params.slice('1');
        params = params.split('&');
        var goods = [];
        params.forEach(function(item){
            var arr = item.split('=');
            goods[arr[0]] = decodeURI(arr[1]);
        });
                var zongjia =0;
                var zongqty =0;
        $.ajax({
            url: `../api/buycar.php`,
            data: {
                cat:'car',
            },
            dataType: 'json',
            success:function(data){console.log(data)
                var table =document.querySelector('table tbody');
                
                table.innerHTML = data.map(item=>{
                    subtotal =item.price*item.qty;
                    zongjia += subtotal;
                    zongqty += item.qty*1;
                    return`
                        
                            <tr>
                                <td><input type="checkbox" class="checkbox" value="398643" checked/></td>
                                <td>
                                    <img src=${item.imgurl} />
                                </td>
                                <td  class="tl">
                                    <a href="">${item.name}</a> <br />
                                  <p>颜色：黑色 尺码：39</p>
                                </td>
                                <td><span class="price" >${item.price}</span></td>
                                <td><p class="saving" >-</p></td>
                                <td>
                                  <div class="amount-box">
                                  <input type="text"  class="text-qty" size="1"  id="Text1"  value="${item.qty}"/>
                                  <div class="tip hidden">您选购的数量超出库存</div></div>
                                </td>
                                <td><span class="sub-total">${subtotal}</span></td>
                                <td>
                                <a href=""  name="delete" class="delete" onclick="return false">删除</a>
                                </td>
                            </tr>
                        
                    `
                }).join('')
                    $('#amountCash').html(zongjia);
                    $('#totalCash').html(zongjia);
                    $('#totalQty').html(zongqty);

                     $('tbody').on('click','.delete',function(){console.log($(this))
                        $name = $(this).parents().parents().children('.tl').children('a');
                        $name = $name.html();
                        $tbody =$(this).parent().parent();console.log($tbody)
                         $.ajax({
                            url: `../api/buycar.php`,
                            data:{
                                name : $name,
                            },
                            success:function(){
                                $tbody.remove();
                            }
                        })
                    })
            }
        })
       
    })            
})