<!DOCTYPE html>
<html>

  <head>
    <title>Payment Successful</title>
  </head>

  <body>
    <h1>Thank you for your purchase!</h1>
    <p>Dear {{ $order->customer->first_name }},</p>
    <p>We have successfully received your payment.</p>
    <p><strong>Transaction ID:</strong> {{ $transactionId }}</p>
    <p><strong>Amount Paid:</strong> ${{ $amount }}</p>
    <p>Your order details:</p>
    <ul>
      @foreach ($order->orderItems as $item)
        <li>{{ $item->product->name }} - Quantity: {{ $item->quantity }} - Subtotal: ${{ $item->sub_total }}</li>
      @endforeach
    </ul>
    <p>We will send you another email once your order has been shipped.</p>
    <p>Thank you for shopping with us!</p>
  </body>

</html>
