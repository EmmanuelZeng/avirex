<?php

namespace App\Models;

use App\Models\Marque;
use App\Models\Vehicule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Modele extends Model
{
    protected $fillable = [
        'name',
        'marque_id'
    ];

    public function marque(): BelongsTo
    {
        return $this->belongsTo(Marque::class);
    }

    public function vehicules(): HasMany
    {
       return $this->hasMany(Vehicule::class);
    }
}
