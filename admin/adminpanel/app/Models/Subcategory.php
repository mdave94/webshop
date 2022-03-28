<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;


class Subcategory extends Model
{
   //All data is fillable now 
   protected $guarded = [];



   public function category()
   {
       return $this->belongsTo(Category::class);
   }
}
