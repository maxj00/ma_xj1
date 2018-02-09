require(['config'],function(){
    require(['jquery','common'],function($){console.log($)
        $('#headerbox').load('../html/header.html')
        $('#footerbox').load('../html/footer.html')
        /*获取页面的元素*/
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        var btnSignIn = document.querySelector('#btnSignIn');
        var username_tip = document.querySelector('#username_tip');
            username.onblur = function() {
                var _username = username.value;
                var reg = /^1[34578]\d{9}$/i
                if(!reg.test(_username)) {
                    username_tip.innerHTML = '手机号不合法';
                    username_tip.style.color ='red';
                    return false;
                }
            }
        $('#btnSignIn').on('click',function(){
            if($('#username').val() != ''){
                    $.ajax({
                    url:'../api/login.php',
                    data:{
                        username:$('#username').val(),
                        password:$('#password').val()
                    },
                    success: function(data) {console.log(data)
                        if(data == 'success') {
                            
                            window.location.href = "../index.html";
                            
                        } else if(data == 'fail'){
                            alert('用户名或密码错误');
                        }
                    }
                })
            }
            
        })
    })
})