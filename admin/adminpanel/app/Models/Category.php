<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Subcategory;



class Category extends Model
{
    use HasFactory;

    //All data is fillable now 
    protected $guarded = [];

    public function subcategories()
    {
        return $this->hasMany(Subcategory::class);
    }

}
