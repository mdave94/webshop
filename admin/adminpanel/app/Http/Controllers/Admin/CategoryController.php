<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;


class CategoryController extends Controller
{
    public function GetAllCategories()

    {   
       
        $categories = Category::all(); 
        $categoryDetails = [];        


        foreach ($categories as $value){
            $subcategory = Subcategory::where('category_name',$value['category_name'])->get();

          
            $item = [
                'category_name' => $value['category_name'],
                'category_image' => $value['category_image'],
                'subcategory_name' => $subcategory
            ];


            array_push($categoryDetails,$item);


        }
       
        return $categoryDetails;

    }
}