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

        // Start building the query
        $query = Contact::query();

        // Apply search
        if ($request->has('search')) {
            $query->search($request->search);
        }

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
        \Log::debug('Entering Contacts Store Method');
        try {
            // validating the request
            $validated_data = $request->validated();
            \Log::info('Validated Data', ['Data' => $validated_data]);

            // store contact message
            $contact = Contact::create($validated_data);
            \Log::info('Contact Stored', ['Contact Data' => $contact]);

            return redirect()->route('contact')->with('message', ['type' => 'success', 'body' => 'Your message sent successfully']);

        } catch (\Throwable $th) {
            \Log::error('Error in storing message contact', ['Error' => $th->getMessage()]);
            return redirect()->route('contact')->with('message', ['type' => 'error', 'body' => 'Error in sending message']);
        }
    }

    public function show(Contact $contact)
    {
    }

    public function destroy(Contact $contact)
    {
    }
}
