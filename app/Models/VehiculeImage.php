<?php

namespace App\Models;

use App\Models\Vehicule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VehiculeImage extends Model
{
    protected $fillable = [
        'vehicule_id',
        'url',
        'caption',
    ];

    public function vehicule(): BelongsTo
    {
        return $this->belongsTo(Vehicule::class);
    }
}
