<?php

namespace App\Filament\Widgets;

use App\Models\Vehicule;
use Filament\Widgets\ChartWidget;

class VehiculeStatusChart extends ChartWidget
{
    protected static ?string $heading = 'Répartition des véhicules par statut';
    protected static ?int $sort = 1;

    protected function getData(): array
    {
        $statuses = ['available', 'reserved', 'sold'];
        $counts = Vehicule::selectRaw('availability, COUNT(*) as total')
            ->whereIn('availability', $statuses)
            ->groupBy('availability')
            ->pluck('total', 'availability');

        // S'assurer que tous les statuts sont présents
        $data = collect($statuses)->map(function ($status) use ($counts) {
            return $counts[$status] ?? 0;
        });

        return [
            'datasets' => [
                [
                    'label' => 'Statut des véhicules',
                    'data' => $data->toArray(),
                    'backgroundColor' => [
                        '#10b981', // Vert - available
                        '#f59e0b', // Jaune - reserved
                        '#ef4444', // Rouge - sold
                    ],
                ],
            ],
            'labels' => [
                'Disponible',
                'Réservé',
                'Soldé',
            ],
        ];
    }

    protected function getType(): string
    {
        return 'pie';
    }
}
