<?php
  require('connect.php');
  $cat = isset($_GET['cat']) ? $_GET['cat'] : null;
  $name = isset($_GET['name']) ? $_GET['name'] : null;
    if ($cat) {
        $data = $conn->query("select * from car where category='car'");
    
        
        $row = $data->fetch_all(MYSQLI_ASSOC);

        echo json_encode($row,JSON_UNESCAPED_UNICODE);

    }else if($name){
        $name2 = $conn->query("select name from car where name='$name'");

        if($name2->num_rows > 0){
            $del = "DELETE FROM car where name='$name'";
            $res = $conn->query($del);
        }
        
        // 删除
    }
        
    
     
?>