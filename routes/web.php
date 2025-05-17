<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/cars', function() {
    return Inertia::render('Cars');
});
Router::get('/services', function(){
    return Inertia::render('Service');
});
Route::get('/about', function() {
    return Inertia::render('About');
});
Route::get('/contact', function() {
    return Inertia::render('Contact');
});