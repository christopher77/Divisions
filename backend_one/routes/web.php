<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\HomeController;

Route::get('/', HomeController::class);

// Route::get('divisions', [DivisionController::class, 'index'])->name('divisions.index');
// Route::get('divisions/create', [DivisionController::class, 'create'])->name('divisions.create');
// Route::post('divisions', [DivisionController::class, 'store'])->name('divisions.store');
// Route::get('divisions/{division}', [DivisionController::class, 'show'])->name('divisions.show');
// Route::get('divisions/{division}/edit', [DivisionController::class, 'edit'])->name('divisions.edit');
// Route::put('divisions/{division}', [DivisionController::class, 'update'])->name('divisions.update');
// Route::delete('divisions/{division}', [DivisionController::class, 'destroy'])->name('divisions.destroy');

Route::resource('divisions', DivisionController::class);
