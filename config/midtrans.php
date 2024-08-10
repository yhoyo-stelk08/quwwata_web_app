<?php

return [
  'server_key' => env('VITE_MIDTRANS_SERVER_KEY'),
  'client_key' => env('VITE_MIDTRANS_CLIENT_KEY'),
  'is_production' => env('MIDTRANS_IS_PRODUCTION', false),
  'is_sanitized' => true,
  'is_3ds' => true,
];