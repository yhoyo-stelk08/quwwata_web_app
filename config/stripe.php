<?php

return [
  'public_key' => env('VITE_STRIPE_PUBLIC_KEY'), // Use the correct key name from .env
  'secret_key' => env('STRIPE_SECRET'),
];