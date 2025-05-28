<?php

namespace App\Http\Controllers;

use App\Models\Vehicule;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $voitures = Vehicule::with(['modele.marque', 'photos'])
                    ->where('availability', 'available')
                    ->latest()
                    ->take(3)
                    ->get();
        return inertia('Home', ['voitures' => $voitures]);
    }
}
