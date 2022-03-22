<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function PostContactDetails(Request $request)
    {   
        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('message');

        $contact_time = date("h:i:sa");
        $contact_date = date("d-m-Y");

    //    return $request;
     return $result = Contact::insert([
            'name' => $name,
            'email'=> $email,
            'message' => $message,
            'contact_date' => $contact_date,
            'contact_time' => $contact_time
        ]);
        
    }
}
