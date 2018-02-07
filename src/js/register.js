require(['config'],function(){
    require(['jquery','common'],function($){console.log($)
        $('#headerbox').load('../html/header.html')
        $('#footerbox').load('../html/footer.html')
        //获取页面上的元素
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        var _password = document.getElementById('o_password');
        var btnRegister = document.getElementById('btnRegister');
        var tip = document.querySelector('.tip');
        var username_tip = document.querySelector('#username_tip');
        var password_tip = document.querySelector('#password_tip');
        var o_password_tip = document.querySelector('#o_password_tip');
        var register_tip = document.querySelector('#register_tip');
        var yanz_tip = document.querySelector('#yanz_tip');
        var yzm = document.querySelector('#rNumber');
        var btnrefresh = document.querySelector('.btnrefresh');
        var input_yan = document.querySelector('#yanz');
        //用户注册需知的一些基本格式要求
        //用户注册的手机格式要求
        /*
                手机号码
                    11位
                    158 8888 8888
                    1 [34578]
             */
        username.onblur = function() {
            var _username = username.value;
            var reg = /^1[34578]\d{9}$/i
            if(!reg.test(_username)) {
                username_tip.innerHTML = '手机号不合法';
                username_tip.style.color = "red";
                return false;
            }else{
                username_tip.innerHTML = '手机号可用';
                username_tip.style.color = "green";
            }
            if(_username !== '') {

                $.ajax({
                    data: {
                        username: _username
                    },
                    url: `../api/register.php`,
                    success: function(res) {
                        console.log(res)
                        if(res == 'fail') {

                            tip.innerHTML = "已注册！";
                            tip.style.color = "red";
                            btnRegister.disabled = true;
                        } else {
                            tip.innerHTML = "正确";
                            tip.style.color = "green";
                            btnRegister.disabled = false;
                        }
                    }
                })

            }
        }

        //用户注册的密码 格式要求
        /*
                密码  
                    长度小于20 
                    不能包含空格
        
        */
        //输入密码
        var _password;
        password.onblur = function() {
            _password = password.value;
            var reg = /^\S{6,20}$/
            if(!reg.test(_password)) {
                password_tip.innerHTML = '密码长度不少于6不大于20';
                password_tip.style.color = "red";
                return false;
            }else{
                password_tip.innerHTML = '密码ok';
                password_tip.style.color = "green";
            }
        }

        //再次输入密码
        o_password.onblur = function() {
            var o1_password = o_password.value;
            if(_password != o1_password) {
                o_password_tip.innerHTML = '两次密码输入不一致';
                o_password_tip.style.color = "red";
            }else{
                o_password_tip.style.color = "green";
                o_password_tip.innerHTML = '两次密码输入一致';
            }
        }

        //生成验证码
        //生成验证码的函数
        function add() {

            //声明一个变量来存放随机验证码
            var sum = '';

            //利用for循环遍历生成四位数的验证码
            for(var i = 0; i < 4; i++) {
                var num = parseInt(Math.random() * 10);

                sum += num;

            }
            yzm.innerHTML = sum;
        }
        add();

        btnrefresh.onclick = function() {
            add();
        }
        input_yan.onblur = function() {
            //判断输入的验证码与生成的验证码是否一致
            if(input_yan.value != yzm.innerHTML) {
                //清空输入框的值
                input_yan.value = '';
                yanz_tip.innerHTML = '验证码输入有误请重新输入';
                add();
            }
        }

        //判断是否注册成功
        btnRegister.onclick = function() {
            var _username = username.value;
            var _password = password.value;
            // console.log(_username);
            if(_username !== '') {

                // 发起ajax请求
                $.ajax({
                    url: `../api/register.php`,
                    data: {
                        username: _username,
                        password: _password
                    },
                    success: function(data) {
                        console.log(data)
                        if(data == 'success') {
                            register_tip.innerHTML = "注册失败，请稍后再试";
                            register_tip.style.color = "red";
                        } else {
                            alert('注册成功');
                            window.location.href = "../html/login.html";
                        }
                    }
                })

            }

        }
    })
})