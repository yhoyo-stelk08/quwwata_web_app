<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        \Log::debug('Entering Orders Index Method');

        $query = Order::with(['customer', 'orderItems.product']);

        // Apply search
        if ($request->has('search')) {
            $query->search($request->get('search'));
        }

        // Add sorting
        if ($request->has('sort_by') && $request->has('sort_direction')) {
            if ($request->get('sort_by') == 'customer_name') {
                $query->join('customers', 'orders.customer_id', '=', 'customers.id')
                    ->orderBy('customers.first_name', $request->get('sort_direction'))
                    ->select('orders.*');
            } else if ($request->get('sort_by') == 'customer_phone') {
                $query->join('customers', 'orders.customer_id', '=', 'customers.id')
                    ->orderBy('customers.phone_number', $request->get('sort_direction'))
                    ->select('orders.*');
            } else if ($request->get('sort_by') == 'customer_email') {
                $query->join('customers', 'orders.customer_id', '=', 'customers.id')
                    ->orderBy('customers.email', $request->get('sort_direction'))
                    ->select('orders.*');
            } else if ($request->get('sort_by') == 'total_payment') {
                $query->join('order_items', 'orders.id', '=', 'order_items.id')
                    ->orderBy('order_items.total', $request->get('sort_direction'))
                    ->select('orders.*');
            } else if ($request->get('sort_by') == 'payment_status') {
                $query->orderBy('status', $request->get('sort_direction'));
            } else {
                $query->orderBy($request->get('sort_by'), $request->get('sort_direction'));
            }
        } else {
            // Default sorting
            $query->orderBy('updated_at');
        }

        // paginate the result
        $orders = $query->paginate(10);
        \Log::debug('Orders Query Result', $orders->toArray());

        // Transform the orders data using OrderResource
        $orderData = OrderResource::collection($orders);
        \Log::debug('Transformed Orders Data', $orderData->toArray($request));

        return inertia('Orders/Index', [
            'orderData' => $orderData,
            'search' => $request->search ?? "",
            'sort_by' => $request->sort_by ?? "",
            'sort_direction' => $request->sort_direction ?? "",
        ]);
    }

    public function show(Order $order)
    {
        \Log::debug('Entering Orders Show Method');

        // Load the order with customer and orderItems
        $order->load(['customer', 'orderItems.product']);
        \Log::debug('Order Data', $order->toArray());

        // Transform the order data using OrderResource
        $orderData = new OrderResource($order);
        \Log::debug('Transformed Order Data', $orderData->toArray(request()));

        return inertia('Orders/Show', [
            'orderData' => $orderData,
        ]);
    }
}
