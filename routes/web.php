<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});
Route::get('/about', function() {
    return inertia('About');
});
Route::get('/cars', function() {
    return inertia('Cars');
});
Route::get('/contact', function() {
    return inertia('Contact');
});