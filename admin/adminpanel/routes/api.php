<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductListController;
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

//Visitors API
Route::GET('/getvisitor',[VisitorController::class,'GetVisitorDetails']);

//Contact page API
Route::POST('/postcontact',[ContactController::class,'PostContactDetails']);

//Site info API route
Route::GET('/allsiteinfo',[SiteInfoController::class,'AllSiteInfo']);

//Categories 
Route::GET('/allcategory',[CategoryController::class,'GetAllCategories']);

//ProductList
Route::GET('/productlistbyremark/{remark}',[ProductListController::class,'ProductListByRemark']);
//ProductList by category
Route::GET('/productlistbycategory/{category}',[ProductListController::class,'ProductListByCategory']);
//ProductList by subcategory
Route::GET('/productlistbysubcategory/{category}/{subcategory}',[ProductListController::class,'ProductListBySubcategory']);