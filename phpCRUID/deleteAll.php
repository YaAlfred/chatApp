<?
if(!file_exists("../data.db")){
    return 'no database exist!';
}elseif ($db=new SQLite3("../data.db")) {
    $messages = array();
    $db->busyTimeout(5000);
    $result = $db->query('DELETE FROM messages') or die('Query failed');
    $db->close();
    unset($db);
    print('all messages has been deleted');
    return true;
} else {
    die($sqliteerror);
}
