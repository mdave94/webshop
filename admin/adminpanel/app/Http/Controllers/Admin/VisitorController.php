<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Visitor;

class VisitorController extends Controller
{
    public function GetVisitorDetails(){

        $ip_address = $_SERVER['REMOTE_ADDR'];

        date_default_timezone_set("Europe/Budapest");
        $visit_time = date("h:i:sa");
        $vitis_date = date("d-m-Y");

        $result = Visitor::insert(
            [
                'ip_address'=> $ip_address,
                'visit_time'=> $visit_time,
                'visit_date'=> $vitis_date
            ]
        );


        return $result;
    }
}
