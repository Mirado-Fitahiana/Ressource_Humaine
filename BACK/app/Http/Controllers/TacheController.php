<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;
use App\Models\Tache;
use Illuminate\Support\Facades\Validator;

class TacheController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        // select * from tache
        $tache = Tache::get();
        return response()->json($tache);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // insert into 

        $validator = Validator::make($request->json()->all(), [
            'tache' => 'required|string',
            'duree' => 'required|numeric',
            'serviceId' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400); // Retourne les erreurs de validation
        }
        
        $tache = new Tache();
        $tache -> fk_service = $request->json('serviceId');
        $tache -> nom_tache = $request->json('tache');
        $tache -> duree_tache = $request->json('duree');

        $tache->save();
        return response()->json(['message' => 'Product created successfully', 'tache' => $tache -> nom_tache], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
