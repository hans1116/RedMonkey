<?php

namespace App\Http\Controllers\frontend;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use DB;
use PDO;




class HomeController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //

        return view('frontend.home')->with(array('active' => 'home','param'=>''));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */

    public function show()
    {
        //
        $start=$_GET['start'];
        $end = $_GET['end'];
        //$resource = $_GET['resource'];

        // basic sanity check
//        new DateTime($start) or die("invalid date (start)");
//        new DateTime($end) or die("invalid date (end)");
        //is_numeric($resource) or die("invalid resource id");

        //$resources = $db->query('SELECT * FROM resources');

        return view('frontend.showModal')->with(array('start' => $start,'end'=>$end));
    }
    public function dbConfig(){
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
        return $db;
    }

    public function eventCreate()
    {

        $db=$this->dbConfig();
        $stmt = $db->prepare("INSERT INTO events (name, start, end, resource_id) VALUES (:name, :start, :end, :resource)");
        $stmt->bindParam(':start', $_POST['start']);
        $stmt->bindParam(':end', $_POST['end']);
        $stmt->bindParam(':name', $_POST['name']);
        $stmt->bindParam(':resource', $_POST['resource']);
        $stmt->execute();

//        class Result {}
//
//        $response = new Result();
//        $response->status = 'OK';
//        $response->message = 'Created with id: '.$db->lastInsertId();
//        $response->id = $db->lastInsertId();
        $response=array('message'=>'Created with id:'.$db->lastInsertId(),'id'=>$db->lastInsertId(),'status'=>'OK');

        header('Content-Type: application/json');
        return response()->json($response);
    }
    public  function eventShow(){
        $db=$this->dbConfig();

        $stmt = $db->prepare('SELECT * FROM [events]');
//        echo $_POST['start'];
//        $stmt->bindParam(':start', $_POST['start']);
//        $stmt->bindParam(':end', $_POST['end']);
        $stmt->execute();
        $result = $stmt->fetchAll();
       // var_dump($result);
        //class Event {}

        $events = array();

        foreach($result as $row) {
//            $e = new Event();
//            $e->id = $row['id'];
//            $e->text = $row['name'];
//            $e->start = $row['start'];
//            $e->end = $row['end'];
//            $e->resource = $row['resource_id'];
//            $e->bubbleHtml = "Event details: <br/>".$e->text;
//            $events[] = $e;

            $event=array('id'=>$row['id'],'text'=>$row['name'],'start'=>$row['start'],'end'=>$row['end'], 'bubbleHtml'=>'Event details:<br/>'.$row['name']);
            //echo $event;
            $events[]=$event;
       }
        //var_dump($events);

        header('Content-Type: application/json');
        return response()->json($events);
    }


}
