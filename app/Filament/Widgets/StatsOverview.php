<?php

namespace App\Filament\Widgets;

use App\Models\Vehicule;
use Filament\Support\Enums\IconPosition;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total de Véhicule', Vehicule::count())
                ->description('Disponibles sur la plateforme')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->descriptionIcon('heroicon-m-arrow-trending-up', IconPosition::Before)
                ->chart([7, 2, 10, 3, 15, 4, 17])
                ->color('success'),
            Stat::make('Véhicules Disponible', Vehicule::where('availability', 'available')->count()),
            Stat::make('Véhicules Soldés', Vehicule::where('availability', 'sold')->count()),
            Stat::make('Véhicules Réservés', Vehicule::where('availability', 'reserved')->count()),
        ];
    }
}
