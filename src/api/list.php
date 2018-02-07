<?php
    include 'connect.php';

    // 在后端获取前端的数据
    $category = isset($_GET['category']) ? $_GET['category'] : null;


    // sql语句
    $sql = "select * from goods2 where";

    // 根据分类改变sql语句
    if($category=='log'){
        $sql .= " category='log' and"; //select * from goods where category=nike
    }else if($category == 'yundong1'){
        $sql .= " category='yundong1' and";
    }else if($category == 'yundongb'){
        $sql .= " category='yundongb' and";
    }else if($category == 'gaogen'){
        $sql .= " category='gaogen' and";
    }else if($category == 'gaogenb'){
        $sql .= " category='gaogenb' and";
    }

    $sql .= ' 1=1';
    // $sql = "select * from goods2 where category='yundong'";

    // 查询
    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集
    $result->close();

    //关闭数据库连接
    $conn->close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>