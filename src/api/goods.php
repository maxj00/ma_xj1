<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'
    // 获取前端数据
    $cat = isset($_GET['html']) ? $_GET['html'] : null;
    $page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 5;

    // 编写sql语句
    $sql = "select * from goods2 where";

    // 根据分类改变sql语句
    if($cat){
        $sql .= " html='list' and"; //select * from goods where category=nike
    }

    $sql .= ' 1=1';
    $res = $conn->query($sql);
    // 使用查询结果集
    // 得到一个数组
    $row = $res->fetch_all(MYSQLI_ASSOC);
    $total = count($row);
    // 查询sql语句
    // 得到查询结果集合（对象）
    $res = $conn->query($sql);
    $res = array(
        'newdata'=>array_slice($row, ($page_no*1-1)*$qty,$qty),
        'total'=>$total,
        'qty'=>$qty,
        'pageNo'=>$page_no*1
    );

    

    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>