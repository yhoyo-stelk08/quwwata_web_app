<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained()->onDelete('cascade');
            $table->string('order_number')->unique();
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->integer('quantity');
            $table->decimal('sub_total', 10, 2);
            $table->decimal('discount', 10, 2)->default(0);
            $table->decimal('total', 10, 2);
            $table->enum('status', ['pending', 'processing', 'completed', 'declined'])->default('pending');
            $table->string('order_notes')->nullable();
            $table->timestamps();


            // $table->string('billing_method');
            // $table->string('billing_status');
            // $table->text('billing_details')->nullable();
            // $table->string('currency');
            // $table->decimal('exchange_rate', 10, 2)->default(1);
            // $table->decimal('total_weight', 10, 2);

            // $table->string('payment_method');
            // $table->string('payment_status');
            // $table->text('payment_details')->nullable();
            // $table->text('notes')->nullable();
            // $table->timestamp('paid_at')->nullable();
            // $table->timestamp('shipped_at')->nullable();
            // $table->timestamp('completed_at')->nullable();
            // $table->timestamp('declined_at')->nullable();
            // $table->timestamp('canceled_at')->nullable();
            // $table->timestamp('refunded_at')->nullable();
            // $table->timestamp('archived_at')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
