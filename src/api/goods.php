<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    // 获取前端数据
    $cat = isset($_GET['html']) ? $_GET['html'] : null;
    // $id = isset($_GET['id']) ? $_GET['id'] : null;

    // 编写sql语句
    $sql = "select * from goods2 where";

    

    // 根据分类改变sql语句
    if($cat == 'list'){
        $sql .= " html='list' and"; //select * from goods where category=nike
    }

    $sql .= ' 1=1';

    // echo "$sql";

    // 查询sql语句
    // 得到查询结果集合（对象）
    $res = $conn->query($sql);

    // 使用查询结果集
    // 得到一个数组
    $row = $res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>