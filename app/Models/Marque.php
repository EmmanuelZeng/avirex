<?php

namespace App\Models;

use App\Models\Modele;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Marque extends Model
{
    protected $fillable = [
        'name',
    ];

    public function modeles(): HasMany
    {
        return $this->hasMany(Modele::class);
    }
}
