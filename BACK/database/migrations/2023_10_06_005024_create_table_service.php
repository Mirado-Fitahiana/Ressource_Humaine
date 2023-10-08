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
        Schema::create('service', function (Blueprint $table) {
            DB::statement('CREATE SEQUENCE service_seq START WITH 1 INCREMENT BY 1;');
            $table->string('id_service')->primary()->default(DB::raw("CONCAT('service', nextval('service_seq'))"));
            $table->string('fk_departement');
            $table->string('nom_service');
            $table->foreign('fk_departement')->references('id_departement')->on('departement');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service');
    }
};
