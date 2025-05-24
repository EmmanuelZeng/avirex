<?php

namespace App\Models;

use App\Models\Modele;
use App\Models\TypeVehicule;
use App\Models\VehiculeImage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vehicule extends Model
{
    protected $fillable = [
        'modele_id',
        'type_id',
        'manufacture_year', //Année de fabrication
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

    protected $casts = [
        'climatisation' => 'boolean', //Climatisation
        'gps' => 'boolean', //GPS
        'sieges_cuir' => 'boolean', //Sièges en cuir
        'sieges_chaufants' => 'boolean', //Sièges chauffants
        'toit_ouvrant' => 'boolean',
        'bluetooth' => 'boolean',
        'camera_recul' => 'boolean',
    ];

    public function modele(): BelongsTo
    {
        return $this->belongsTo(Modele::class);
    }

    public function typeVehicule(): BelongsTo
    {
        return $this->belongsTo(TypeVehicule::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function photos(): HasMany
    {
        return $this->hasMany(VehiculeImage::class);
    }
}
