<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        \Log::debug('Entering Contacts Index Method');

        $query = Contact::search($request);

        // Add sorting
        if ($request->has('sort_by') && $request->has('sort_direction')) {
            $query->orderBy($request->get('sort_by'), $request->get('sort_direction'));
        } else {
            // Default sorting
            $query->orderByDesc('updated_at');
        }

        $contacts = $query->paginate(10);

        $contactsData = ContactResource::collection($contacts);

        \Log::info('Contacts Data', ['Contacts Data' => $contactsData]);

        return inertia('Contacts/Index', [
            'contactsData' => $contactsData,
            'search' => $request->search ?? "",
            'sort_by' => $request->sort_by ?? "",
            'sort_direction' => $request->sort_direction ?? "",
        ]);
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
