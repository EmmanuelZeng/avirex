<?php

namespace App\Filament\Resources\VehiculeResource\Pages;

use App\Filament\Resources\VehiculeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListVehicules extends ListRecords
{
    protected static string $resource = VehiculeResource::class;
    protected static string $view = 'filament.resources.voiture-resource.pages.list-voitures';
    protected function getHeaderActions(): array
    {
        return [
            // Actions\CreateAction::make(),
        ];
    }
}
