<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\VehiculeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);
Route::get('/cars', [VehiculeController::class, 'index'])->name('cars.index');
Route::get('/cars/{vehicule}', [VehiculeController::class, 'show'])->name('cars.show');
Route::get('/services', function(){
    return Inertia::render('Service');
});
Route::get('/about', function() {
    return Inertia::render('About');
});
Route::get('/contact', function() {
    return Inertia::render('Contact');
});
