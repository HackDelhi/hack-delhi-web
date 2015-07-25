<?php
	require("mysql.class.php");

	$m = new MySQL();

	if(isset($_GET['addUsers'])){
		$num = $_GET['num'];
		$m->Update("bheed", array("numBheed" => $num));
	}

	if(isset($_GET['update'])){
		$m->Select("bheed", "numBheed", array("id" => '1'));
		$num = ArrayResult()[0];
		echo $num;

	}
?>