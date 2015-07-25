<?php
	require("mysql.class.php");

	$m = new MySQL();

	if(isset($_GET['addUsers'])){
		$num = $_GET['num'];
		$m->Update("trainData", array("numBheed" => $num));
	}

	if(isset($_GET['update'])){
		$m->Select("trainData", array("numBheed"), array("id" => '1'));
		$num = $m->ArrayResult();
		echo json_encode(Array("status"=>$num["numBheed"]));

	}
?>