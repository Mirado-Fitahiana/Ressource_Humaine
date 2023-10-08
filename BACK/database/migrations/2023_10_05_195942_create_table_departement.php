<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('departement', function (Blueprint $table) {
            DB::statement('CREATE SEQUENCE departement_seq START WITH 1 INCREMENT BY 1;');
            $table->string('id_departement')->primary()->default(DB::raw("CONCAT('departement', nextval('departement_seq'))"));
            $table->string('nom_departement')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('departement');
    }
};
