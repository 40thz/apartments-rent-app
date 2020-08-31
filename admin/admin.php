<?php
// Параметры для подключения
$db_host = "localhost"; 
$db_user = "root"; // Логин БД
$db_password = ""; // Пароль БД
$db_base = 'infousers'; // Имя БД
$db_table = "mytable"; // Имя Таблицы БД

// Подключение к базе данных

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);// включаем сообщения об ошибках
$mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);
$mysqli->set_charset("utf8mb4"); // задаем кодировку

$result = $mysqli->query('SELECT * FROM `mytable`'); // запрос на выборку
while($row = $result->fetch_assoc())// получаем все строки в цикле по одной
{
    echo '<div class="div">Запись id='.$row['id'].'. Текст: '.$row['text'].'Запись id='.$row['name'].''.'</div>';
}
?>

