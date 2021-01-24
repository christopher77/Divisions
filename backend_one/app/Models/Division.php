<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    use HasFactory;
    // protected $fillable = [
    //     'name',
    //     'superior_name',
    //     'subdivisions',
    //     'level',
    //     'coworkers',
    //     'ambassador'
    // ];
    protected $guarded = [];
}
