<?php
if(!file_exists("../data.db")){
    $db=new SQLite3("../data.db");
    $db->busyTimeout(5000);
    $sql="CREATE TABLE IF NOT EXISTS messages(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        message TEXT,
        author TEXT,
        datetime DATE DEFAULT (datetime('now','localtime'))
    )";
    $db->query($sql);
    $db->close();
    unset($db);
}elseif ($db=new SQLite3("../data.db")) {
    $messages = array();
    $db->busyTimeout(5000);
    $result = $db->query('SELECT * FROM messages') or die('Query failed');
    while ($row = $result->fetchArray())
    {
        if(!$row['author']){
            $row['author'] = 'Anonim';
        }
        array_push($messages, "{$row['author']} ({$row['datetime']}):\n {$row['message']}\n");
    }
    $db->close();
    unset($db);
    echo json_encode($messages);
} else {
    die($sqliteerror);
}
?>
