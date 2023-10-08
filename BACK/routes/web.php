<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MiradoController;
use App\Http\Controllers\OniController;
use App\Http\Controllers\TacheController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/all-tache',[TacheController::class,'index']);
Route::get('/tache-by-id/{id_services}',[MiradoController::class,'get_tache_by_id']);
Route::get('/services/{id_departement}', [MiradoController::class, 'get_service_by_id']);
Route::get('/departements',[MiradoController::class,'getDepartement']);
Route::get('/all-services',[MiradoController::class,'getService']);
Route::get('/get-districts', [MiradoController::class, 'getDistrict']);
Route::get('/get-all-diplome', [OniController::class, 'get_all_diplome']);
Route::get('/get-all-genre', [OniController::class, 'get_all_genre']);
Route::get('/get-all-nationalite', [OniController::class, 'get_all_nationalite']);
Route::get('/get-all-langue', [OniController::class, 'get_all_langue']);
Route::get('/get-all-niveau', [OniController::class, 'get_all_niveau']);
Route::get('/get-all-experience', [OniController::class, 'get_all_experience']);
Route::get('/get-all-situation-matrimoniale', [OniController::class, 'get_all_situation_matrimoniale']);
Route::get('/get-all-age', [OniController::class, 'get_all_age']);
Route::get('/get-all-commune', [OniController::class, 'get_all_commune']);

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
