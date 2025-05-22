<?php

namespace App\Models;

use App\Models\Modele;
use App\Models\TypeVehicule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vehicule extends Model
{
    protected $fillable = [
        'modele_id',
        'type_id',
        'manifacture_year', //Année de fabrication
        'mileage', //Kilométrage
        'price', // prix
        'type_carburant', //Type carburant
        'transmission', //Transmission
        'description', //description
        'climatisation', //Climatisation
        'gps', //GPS
        'sieges_cuir', //Sièges en cuir
        'sieges_chaufants', //Sièges chauffants
        'toit_ouvrant',
        'bluetooth',
        'camera_recul',
        'availability', //disponiblité
    ];

    public function modele(): BelongsTo
    {
        return $this->belongsTo(Modele::class);
    }

    public function type(): BelongsTo
    {
        return $this->belongsTo(TypeVehicule::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }
}
