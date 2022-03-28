<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductList;


class ProductListController extends Controller
{
    public function ProductListByRemark($remark)
    {
        
        return  $productList = ProductList::where('remark',$remark)->get();

    }
}
