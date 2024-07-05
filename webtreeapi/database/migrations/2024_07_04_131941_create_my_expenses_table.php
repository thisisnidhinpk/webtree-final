<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('my_expenses', function (Blueprint $table) {
            // $table->id();
            // $table->timestamps();
            $table->integer('expensesid')->autoIncrement();
            $table->integer('customerid');
            $table->foreign('customerid')->references('customerid')->on('my_users')->onDelete('cascade');
            $table->integer('catagoryid');
            $table->foreign('catagoryid')->references('catagoryid')->on('my_catagories')->onDelete('cascade');
            $table->string('description');
            $table->integer('amount');
            $table->date('dateofexp');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('my_expenses');
    }
};
