<?php

namespace App\Models;

use App\Models\Marque;
use Illuminate\Database\Eloquent\Model;
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
}
