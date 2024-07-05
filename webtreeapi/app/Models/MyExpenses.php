<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyExpenses extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $primaryKey = 'expensesid';
    protected $fillable = ['customerid','catagoryid' ,'description','amount','dateofexp'];
    protected $table = 'my_expenses';
}
