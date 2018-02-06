require(['config'],function(){
    require(['jquery','common','ajax'],function($){console.log($)
        $('#headerbox').load('../html/header.html')
        $('#footerbox').load('../html/footer.html')
        /*获取页面的元素*/
        var username0 = document.getElementById('l_email');
        var password0 = document.getElementById('l_password');
        var btnSignIn = document.querySelector('#btnSignIn');
        var username_tip = document.querySelector('#username_tip');
            username0.onblur = function() {
                var _username = username0.value;
                var reg = /^1[34578]\d{9}$/i
                if(!reg.test(_username)) {
                    username_tip.innerHTML = '手机号不合法';
                    username_tip.style.color ='red';
                    return false;
                }
            }
        $('#btnSignIn').on('click',function(){
            $.ajax({
                url:'../api/login.php',
                data:{
                    username:$('#username').val(),
                    password:$('#password').val()
                },
                success: function(data) {console.log(data)
                    if(data == 'success') {
                        
                        // window.location.href = "../index.html";
                        
                    } else {
                        alert('用户名或密码错误');
                    }
                }
            })
        })
    })
})