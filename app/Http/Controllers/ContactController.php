<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(Request $request)
    {
    }

    public function store(ContactRequest $request)
    {
    }

    public function show(Contact $contact)
    {
    }

    public function destroy(Contact $contact)
    {
    }
}
