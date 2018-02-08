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
        $.ajax({
            url: `../api/car.php`,
            data: {
                cat:'car',
            },
            dataType: 'json',
            success:function(data){
                var table =document.querySelector('table');
                table.innerHTML = data.map(item=>{
                    subtotal =item.price*item.qty;
                    totalCash += subtotal;
                    return`
                        <tbody>
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
                                <a href=""  name="delete" class="delete">删除</a>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                              <tr>
                                <td colspan="8">
                                  <table width="100%">
                                    <colgroup>
                                      <col width="80%" />
                                    </colgroup>
                                    <tr>
                                      <td class="tl"><a href="#" id="batchDelete" class="batch-delete">删除选中商品</a></td>
                                      <td><b id="totalQty">3</b> 件商品</td>
                                      <td>总价：</td>
                                      <td><span id="amountCash"></span></td>
                                    </tr>
                                    <tr>
                                      <td></td>
                                      <td></td>
                                      <td>优惠：</td>
                                      <td><span id="reduceCash">-</span></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="8" class="sum">总计(不含运费)：<em id="totalCash">992.00</em></td>
                              </tr>
                        </tfoot>
                        
                    `
                }).join('')
            }
        })
    })            
})