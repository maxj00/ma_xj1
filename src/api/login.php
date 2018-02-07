<?php
	// include 'connect.php';
	require('connect.php');
	
	// 获取前端数据
	$username = isset($_GET['username']) ? $_GET['username'] : null;
	$password = isset($_GET['password']) ? $_GET['password'] : null;

	// 密码md5加密
	$password0 = md5($password);
    $result = $conn->query("select * from user where username='$username'");



	if($result->num_rows > 0){
		echo 'success';
	}else{
		echo 'fail';
	}
	

	// 释放查询内存(销毁)
	$result->free();

	//关闭连接
	$conn->close();
?>