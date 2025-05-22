<?php

namespace App\Models;

use App\Models\Vehicule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TypeVehicule extends Model
{
    protected $fillable = [
        'label',
    ];

    public function vehicules(): HasMany
    {
        return $this->hasMany(Vehicule::class);
    }
}
