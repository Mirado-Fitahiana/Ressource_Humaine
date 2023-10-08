<?php
namespace App\Http\Controllers; // Correction du namespace : "Controllers" au lieu de "Controller"

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;

class OniController extends Controller {
    public function get_all_diplome(){
        $tache = DB::table('valeur_categorie')
        ->select('id_valeur_categorie', 'valeur_categorie')
        ->where('fk_categorie','=','categorie1')
        ->get();
        return response()->json($tache); 
    }
    
    public function get_all_genre(){
        $tache = DB::table('valeur_categorie')
        ->where('fk_categorie','=','categorie2')
        ->get();
        return response()->json($tache); 
    }
    
    public function get_all_nationalite(){
        $tache = DB::table('valeur_categorie')
        ->where('fk_categorie','=','categorie3')
        ->get();
        return response()->json($tache); 
    }
    
    public function get_all_langue(){
        $tache = DB::table('valeur_categorie')
        ->where('fk_categorie','=','categorie4')
        ->get();
        return response()->json($tache); 
    }
    
    public function get_all_niveau(){
        $tache = DB::table('valeur_categorie')
        ->where('fk_categorie','=','categorie5')
        ->get();
        return response()->json($tache); 
    }
    
    public function get_all_experience(){
        $tache = DB::table('valeur_categorie')
        ->where('fk_categorie','=','categorie6')
        ->get();
        return response()->json($tache); 
    }
    
    public function get_all_situation_matrimoniale(){
        $tache = DB::table('valeur_categorie')
        ->where('fk_categorie','=','categorie7')
        ->get();
        return response()->json($tache); 
    }
    
    public function get_all_age(){
        $tache = DB::table('valeur_categorie')
        ->where('fk_categorie','=','categorie8')
        ->get();
        return response()->json($tache); 
    }
    
    public function get_all_commune(){
        $tache = DB::table('commune')
        ->take(7)
        ->get();
        return response()->json($tache); 
    }
}
?>
