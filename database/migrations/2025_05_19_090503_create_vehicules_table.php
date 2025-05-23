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
        Schema::create('vehicules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('modele_id')->constrained()->onDelete('cascade');
            $table->foreignId('type_id')->constrained()->onDelete('cascade');
            $table->integer('manufacture_year');
            $table->integer('price');
            $table->string('type_carburant');
            $table->string('transmission');
            $table->text('description');
            $table->boolean('climatisation')->default('false');
            $table->boolean('gps')->default('false');
            $table->boolean('sieges_cuir')->default('false');
            $table->boolean('sieges_chauffants')->default('false');
            $table->boolean('toit_ouvrant')->default('false');
            $table->boolean('bluetooth')->default('false');
            $table->boolean('camera_recul')->default('false');
            $table->enum('availability', ['available', 'reserved', 'sold']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicules');
    }
};
