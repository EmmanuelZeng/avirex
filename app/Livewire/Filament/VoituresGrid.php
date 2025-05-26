<?php

namespace App\Http\Livewire\Filament;

use Livewire\Component;
use App\Models\Vehicule;

class VoituresGrid extends Component
{
    public $voitures;

    public function mount()
    {
        $this->voitures = Vehicule::with(['photos', 'modele'])->latest()->get();
    }

    public function updateStatus($id, $newStatus)
    {
        $voiture = Vehicule::findOrFail($id);
        $voiture->availability = $newStatus;
        $voiture->save();

        $this->voitures = Vehicule::with(['photos', 'modele'])->latest()->get();
        $this->dispatchBrowserEvent('status-updated');
    }

    public function render()
    {
        $voitures = Vehicule::with(['photos', 'modele'])->latest()->get();

        // return view('livewire.filament.voitures-grid', [
        //     'voitures' => $voitures,
        // ]);
        return view('filament\resources\voiture-resource\pages\list-voitures', [
            'voitures' => $voitures,
        ]);
    }
}

