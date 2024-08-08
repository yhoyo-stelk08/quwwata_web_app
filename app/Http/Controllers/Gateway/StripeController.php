<?php

namespace App\Http\Controllers\Gateway;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StripeController extends Controller
{
    public function payment(Request $request)
    {
        dd($request->all());
    }

    public function success()
    {
    }
    public function cancel()
    {
    }
}
