<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\Contact;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        $unreadMessages = Contact::where('is_read', false)->get();
        \Log::debug('Unread Messages Count', ['unreadMessages' => $unreadMessages->count()]);

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
            ],
            'message' => $request->session()->get('message'),
            'unreadMessages' => $unreadMessages->count(),
        ];
    }
}
