<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Validator;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function mail(Request $request)
    {
        // echo "<pre>";
        // print_r($request->all()); die();
        
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|max:255',
            'email' => 'required|email',
            'lastName' => 'required|string|max:255',
            'message' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(["success" => false, 'errors' => $validator->errors() ],404);
        }
        $data = [
            'firstName'  => $request->firstName,
            'lastName'  => $request->lastName,
            'email'  => $request->email,
            'message'  => $request->message,
        ];
        //Mail Function
        Mail::send('email.contact', ['data1' => $data], function ($m) {
            $m->to(['pankaj.kumar@xcelance.com','connect@imrnext.com'])->subject('Contact Form Mail!');
        });
        //Json Response For Angular frontend
        return response()->json(["success" => true,"message" => "Email sent successfully."],200);
    }
}
