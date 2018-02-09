<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $price = isset($_GET['price']) ? $_GET['price'] : null;
    $imgurl = isset($_GET['imgurl']) ? $_GET['imgurl'] : null;
    $category = isset($_GET['category']) ? $_GET['category'] : null;
    $cat = isset($_GET['cat']) ? $_GET['cat'] : null;
    $num = isset($_GET['num']) ? $_GET['num'] : null;
    $name1 = $conn->query("select name from car where name='$name'");

    if($name1->num_rows > 0){
        $sqlbq ="update car set qty = $num where name='$name'";
        $res = $conn->query($sqlbq);
    }else{
        // 写入数据sql语句
        $sql = "insert into car(name,price,imgurl,category,qty) values('$name','$price','$imgurl','$category','$num')";

        $res = $conn->query($sql);
    }
    
?>  