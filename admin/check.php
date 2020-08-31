<?php
echo "we22wq";
    if(isset($_POST['sub'])){
        $log = $_POST['adminLogin'];
        $pass = $_POST['adminPass'];
        $login = 'admin';
        $password = 'admin';
        if($log == $login && $pass == $password ){
            echo "wewq";
        }else{
            echo "wewq";
        }
    }
?>
