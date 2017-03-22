<?php

date_default_timezone_set("UTC");

$db_exists = file_exists("daypilot.sqlite");

$db = new PDO('sqlite:daypilot.sqlite');

if (!$db_exists) {
    //create the database
    $db->exec("CREATE TABLE IF NOT EXISTS events (
                        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
                        name TEXT, 
                        start DATETIME, 
                        [end] DATETIME,
                        resource_id INTEGER)");

    
    $db->exec("CREATE TABLE resources (
                        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                        name VARCHAR (200));");
    
    $messages = array(
                    array('name' => 'Person 1'),
                    array('name' => 'Person 2'),
                    array('name' => 'Person 3'),
                    array('name' => 'Person 4'),
                    array('name' => 'Tool 1'),
                    array('name' => 'Tool 2'),
                    array('name' => 'Tool 3'),
                    array('name' => 'Tool 4'),
        
                );

    $insert = "INSERT INTO resources (name) VALUES (:name)";
    $stmt = $db->prepare($insert);
    $stmt->bindParam(':name', $name);
 
    foreach ($messages as $m) {
      $name = $m['name'];
      $stmt->execute();
    }
    
}

?>
