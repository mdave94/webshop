<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Contanct;

class ContactController extends Controller
{
    public function PostContactDetails(Request $request)
    {   
        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('message');

        $contact_time = date("h:i:sa");
        $contact_date = date("d-m-Y");


     return $result = Contact::insert([
            'name' => $name,
            'email'=> $email,
            'message' => $message,
            'contact_date' => $contact_date,
            'contact_time' => $contact_time
        ]);
        
    }
}
