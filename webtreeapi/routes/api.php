<?php

use App\Http\Controllers\MyCatagoryController;
use App\Http\Controllers\MyExpensesController;
use App\Http\Controllers\MyUsersController;
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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/userRegister', [MyUsersController::class, 'userRegister']);
Route::post('/login', [MyUsersController::class, 'login']);
Route::post('/createCatagory', [MyCatagoryController::class, 'createCatagory']);
Route::post('/loadCatagory', [MyCatagoryController::class, 'loadCatagory']);
Route::post('/updateCatagory', [MyCatagoryController::class, 'updateCatagory']);
Route::post('/createExpenses', [MyExpensesController::class, 'createExpenses']);
Route::post('/summerizeExpenses', [MyExpensesController::class, 'summerizeExpenses']);
 