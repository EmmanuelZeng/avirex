<?php

namespace App\Models;

use App\Models\Marque;
use Illuminate\Database\Eloquent\Model;

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
}
