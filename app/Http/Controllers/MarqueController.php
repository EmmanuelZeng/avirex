<?php

namespace App\Http\Controllers;

use App\Models\Marque;
use Illuminate\Http\Request;

class MarqueController extends Controller
{
    public function models(Marque $brand)
    {
        return $brand->models()->select('id', 'name')->orderBy('name')->get();
    }
}
