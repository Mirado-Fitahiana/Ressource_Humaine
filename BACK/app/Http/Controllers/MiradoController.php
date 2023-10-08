<?php
namespace App\Http\Controllers; // Correction du namespace : "Controllers" au lieu de "Controller"

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Tache;


class MiradoController extends Controller {
    public function getDistrict() {
        $districts = DB::table('district')->get();
        return response()->json($districts);
    }

    public function getService(){
        $services = DB::table('service')->get();
        return response()->json($services);
    }


    // select * from departement
    public function getDepartement(){
        $services = DB::table('departement')->get();
        return response()->json($services);
    }

    // select * from service where id_departement = ??
    public function get_service_by_id($id_departement){
        $services = DB::table('service')
        ->join('departement','service.fk_departement','=','departement.id_departement')
        ->where('fk_departement','=',$id_departement)
        ->get();
        return response()->json($services);
    }
    
    public function get_tache_by_id($id_service){
        $tache = DB::table('tache')
        ->join('service','tache.fk_service','=','service.id_service')
        ->where('fk_service','=',$id_service)
        ->get();
        return response()->json($tache); 
    }
    
    
   
} 
?>
