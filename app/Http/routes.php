<?php

/*
 |--------------------------------------------------------------------------
 | Application Routes
 |--------------------------------------------------------------------------
 |
 | Here is where you can register all of the routes for an application.
 | It's a breeze. Simply tell Laravel the URIs it should respond to
 | and give it the controller to call when that URI is requested.
 |
 */


Route::get('/', function() {
	return redirect("/login");
});
//Route::group(array("middleware" => 'auth'), function() {
//Route::resource('admin/users','admin\UserController');
//Route::resource('admin/products','admin\ProductController');
//Route::resource('admin/notices','admin\NoticeController');
//Route::resource('admin/discuss','admin\DiscussController');

//Route::get('/admin/users','admin\UserController@index');

//log page url
Route::get('/login','frontend\LoginController@index');
Route::post('/login','frontend\LoginController@login');

//home page url
Route::get('/home','frontend\HomeController@index');
Route::get('/showModal','frontend\HomeController@show');
Route::post('/event/create','frontend\HomeController@eventCreate');
Route::post('/event/show','frontend\HomeController@eventShow');

//clients page url
Route::get('/clients','frontend\ClientController@index');

//business page url
Route::get('/business/dashboard','frontend\BusinessController@index');

//promote page url
Route::get('/promote/overview','frontend\PromoteController@index');
