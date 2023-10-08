<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tache extends Model
{
    use HasFactory;

    protected $table = 'tache';
    protected $primaryKey = 'id_tache';
    protected $fillable = [
        'id_tache',
        'fk_service',
        'nom_tache',
        'duree_tache'
    ];
}
