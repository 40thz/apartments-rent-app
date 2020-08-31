<?php
        $log = $_POST['adminLogin'];
        $pass = $_POST['adminPass'];
        $login = 'admin';
        $password = 'admin';
        echo $log;
        if($log === $login && $pass === $password ){
            echo "ok";
        }else{
            echo "error";
        }
?>
