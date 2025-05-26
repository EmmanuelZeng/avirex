<?php

namespace App\Filament\Widgets;

use App\Models\Vehicule;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CarsChart extends ChartWidget
{
    protected static ?string $heading = 'Véhicules réservés par mois';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        $currentYear = now()->year;

        $data = Vehicule::selectRaw('MONTH(created_at) as month, COUNT(*) as total')
            ->where('availability', 'sold')
            ->whereYear('created_at', $currentYear)
            ->groupBy('month')
            ->orderBy('month')
            ->get()
            ->pluck('total', 'month');

        // Initialise les mois
        $months = collect(range(1, 12))->map(function ($month) use ($data) {
            return $data[$month] ?? 0;
        });

        return [
            'datasets' => [
                [
                    'label' => 'Véhicules réservés',
                    'data' => $months->toArray(),
                    'backgroundColor' => '#10b981',
                ],
            ],
            'labels' => [
                'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
                'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'
            ],
        ];
    }

    protected function getType(): string
    {
        return 'line'; // ou 'line', 'pie', etc.
    }
}
