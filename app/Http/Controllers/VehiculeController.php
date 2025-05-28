<?php

namespace App\Http\Controllers;

use App\Http\Requests\VehiculeRequest;
use App\Models\Vehicule;
use Illuminate\Http\Request;

class VehiculeController extends Controller
{
    public function index(VehiculeRequest $request)
    {
        $query = Vehicule::with(['modele.marque', 'photos'])
                    ->whereIn('availability', ['available', 'sold']);

        if($request->has('availability')) {
            $query->where('availability', 'like', '%' .$request->availability . '%');
        }
        if($request->has('type_vehicule')) {
            $query->where('type_vehicule_id', 'like', '%' .$request->type_vehicule . '%');
        }
        if($request->has('marque')) {
            $query->where('marque_id', 'like', '%' .$request->marque . '%');
        }
        if($request->has('modele')) {
            $query->where('modele_id', 'like', '%' .$request->modele . '%');
        }
        if($request->has('price')) {
            $query->where('price', 'like', '%' .$request->price . '%');
        }
        if($request->has('mileage')) {
            $query->where('mileage', 'like', '%' .$request->mileage . '%');
        }
        if($request->has('type_carburant')) {
            $query->where('type_carburant', 'like', '%' .$request->type_carburant . '%');
        }

        $vehicules=$query->paginate(6);
        return inertia('Cars', ['vehicules' => $vehicules]);
    }

    public function show(Vehicule $vehicule)
    {
        $vehicule->load([
            'photos',
            'modele.marque' // Charge les relations nécessaires pour la vue
        ]);
        return inertia('Show', [
            'vehicule' => $vehicule
        ]);
    }
}
