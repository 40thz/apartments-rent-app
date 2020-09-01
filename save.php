<?php


// Параметры для подключения
$db_host = "localhost"; 
$db_user = "root"; // Логин БД
$db_password = ""; // Пароль БД
$db_base = 'infousers'; // Имя БД
$db_table = "mytable"; // Имя Таблицы БД

// Подключение к базе данных
$mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);
// Переменные с формы
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];
$flat = $_POST['flat'];
$floor = $_POST['floor'];
// Если есть ошибка соединения, выводим её и убиваем подключение
if ($mysqli->connect_error) {
    die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$result = $mysqli->query("INSERT INTO ".$db_table." (name,lastname,phone,mail,flat,floor) VALUES ('$name','$lastname','$phone','$mail','$flat','$floor')");

if ($result == true){
    echo "Информация занесена в базу данных";

}else{
    echo "Информация не занесена в базу данных";
}

