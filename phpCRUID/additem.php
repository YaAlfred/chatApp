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
    $db->busyTimeout(5000);
    $stmt = $db->prepare('INSERT INTO messages (message, author) VALUES (:message, :author)');
    $stmt->bindValue(':message', $_POST['message']);
    $stmt->bindValue(':author', $_POST['author']);
    $stmt->execute();
    $db->close();
    unset($db);
    return "success!";
} else {
    die($sqliteerror);
}
?>
