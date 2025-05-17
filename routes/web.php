<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/about', function() {
    return Inertia::render('About');
});
Route::get('/cars', function() {
    return Inertia::render('Cars');
});
Route::get('/contact', function() {
    return Inertia::render('Contact');
});