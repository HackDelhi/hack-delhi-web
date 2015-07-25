<?php
header("Access-Control-Allow-Origin: *");
	require("mysql.class.php");

	$m = new MySQL();

	if(isset($_GET['addusers'])){
		$num = $_GET['num'];
		// echo $num;
		$m->Update("trainData", array("numBheed" => $num), array("id" => '1'));
	}

	if(isset($_GET['update'])){	
		$m->Select("trainData", array("numBheed"), array("id" => '1'));
		$num = $m->ArrayResult();
		echo json_encode(Array("status"=>$num["numBheed"]));
	}
?>