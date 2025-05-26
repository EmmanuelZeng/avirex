<?php

namespace App\Console\Commands;

use App\Services\VehicleImportService;
use Illuminate\Console\Command;

class ImportVehicleData extends Command
{
    protected $signature = 'vehicles:import';
    protected $description = 'Importe les marques et modèles depuis l’API VPIC';

    public function handle(VehicleImportService $importService)
    {
        $this->info('Import en cours...');
        $importService->importFromApi();
        $this->info('Import terminé avec succès.');
    }
}
