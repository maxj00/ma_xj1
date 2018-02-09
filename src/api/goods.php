<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    // 获取前端数据
    $cat = isset($_GET['html']) ? $_GET['html'] : null;
    $page_no = isset($_POST['pageNo']) ? $_POST['pageNo'] : 1;
    $qty = isset($_POST['qty']) ? $_POST['qty'] : 10;

    // 编写sql语句
    $sql = "select * from goods2 where";

    // 根据分类改变sql语句
    if($cat == 'list'){
        $sql .= " html='list' and"; //select * from goods where category=nike
    }

    $sql .= ' 1=1';

    // 查询sql语句
    // 得到查询结果集合（对象）
    $res = $conn->query($sql);
    $res = array(
        'data'=>array_slice($arr_data, ($page_no-1)*$qty,$qty),
        'total'=>count($arr_data),
        'qty'=>$qty,
        'pageNo'=>$page_no*1
    );

    // 使用查询结果集
    // 得到一个数组
    $row = $res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>