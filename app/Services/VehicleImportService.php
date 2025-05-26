<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Models\Marque;
use App\Models\Modele;

class VehicleImportService
{
    public function importFromApi(): void
    {
        // 1. Récupération des marques depuis l'API
        $makesResponse = Http::withOptions([
            'verify' => storage_path('cacert.pem'), // ou false en local
        ])->get('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json');

        if (!$makesResponse->successful()) {
            throw new \Exception('Erreur lors de la récupération des marques');
        }

        $makesData = $makesResponse->json();

        if (!isset($makesData['Results'])) {
            throw new \Exception('Format inattendu pour la liste des marques');
        }

        $makes = $makesData['Results'];

        foreach ($makes as $make) {
            $makeName = trim($make['Make_Name']);

            // Filtrage : ignorer les marques vides ou contenant des chiffres
            if (!$makeName || strlen($makeName) < 2 || preg_match('/\d/', $makeName)) {
                Log::info("Marque ignorée : {$makeName}");
                continue;
            }

            // Création ou récupération de la marque
            $marque = Marque::firstOrCreate(['name' => $makeName]);

            // 2. Requête pour les modèles associés à la marque
            $encodedMake = urlencode($makeName);
            $modelsUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/{$encodedMake}?format=json";

            try {
                $modelsResponse = Http::withOptions([
                    'verify' => storage_path('cacert.pem'),
                ])->get($modelsUrl);
            } catch (\Exception $e) {
                Log::warning("Erreur lors de la requête modèles pour {$makeName}: " . $e->getMessage());
                continue;
            }

            if (!$modelsResponse->successful()) {
                Log::warning("Échec récupération modèles pour {$makeName}", [
                    'url' => $modelsUrl,
                    'status' => $modelsResponse->status(),
                ]);
                continue;
            }

            $modelsData = $modelsResponse->json();

            if (!isset($modelsData['Results']) || !is_array($modelsData['Results'])) {
                Log::warning("Pas de clé Results ou format incorrect pour {$makeName}", [
                    'raw_response' => $modelsData,
                ]);
                continue;
            }

            $modeles = $modelsData['Results'];

            foreach ($modeles as $model) {
                Modele::firstOrCreate([
                    'name' => $model['Model_Name'],
                    'marque_id' => $marque->id,
                ]);
            }
        }
    }
}
