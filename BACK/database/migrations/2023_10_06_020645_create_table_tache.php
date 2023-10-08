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
        Schema::create('tache', function (Blueprint $table) {
            DB::statement('CREATE SEQUENCE tache_seq START WITH 1 INCREMENT BY 1;');
            $table->string('id_tache')->primary()->default(DB::raw("CONCAT('tache', nextval('tache_seq'))"));
            $table->string('fk_service');
            $table->string('nom_tache');
            $table->float('duree_tache');
            $table->foreign('fk_service')->references('id_service')->on('service');
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tache');
    }
};
