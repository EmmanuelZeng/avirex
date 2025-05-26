<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);
Route::get('/cars', function() {
    return Inertia::render('Cars');
});
Route::get('/services', function(){
    return Inertia::render('Service');
});
Route::get('/about', function() {
    return Inertia::render('About');
});
Route::get('/contact', function() {
    return Inertia::render('Contact');
});
