<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
    // Route::get('/divisions', 'DivisionController@index')->name('divisions.all');
    // Route::post('/divisions', 'DivisionController@store')->name('divisions.store');
    // Route::get('/divisions/{expense}', 'DivisionController@show')->name('divisions.show');
    // Route::put('/divisions/{expense}', 'DivisionController@update')->name('divisions.update');
    // Route::delete('/divisions/{expense}', 'DivisionController@destory')->name('divisions.destroy');
});
