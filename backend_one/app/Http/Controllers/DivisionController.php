<?php

namespace App\Http\Controllers;

use App\Models\Division;
use Illuminate\Http\Request;
use App\Http\Requests\DivisionStoreRequest;
use App\Http\Requests\DivisionUpdateRequest;

class DivisionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $divisions = Division::all()->sortByDesc('id');
        // return $divisions;
        // return response()->json($divisions);
        return view('divisions.index', compact('divisions'));
    }

    public function create()
    {
        //
        return view('divisions.create');
    }

    public function store(DivisionStoreRequest $request)
    {
        // return $request->all();
        $division = new Division();

        $division->name = $request->name;
        $division->superior_name = $request->superior_name;
        $division->subdivisions = $request->subdivisions;
        $division->level = $request->level;
        $division->coworkers = $request->coworkers;
        $division->ambassador = $request->ambassador;

        // return $division;
        $division->save();

        return redirect()->route('divisions.show', $division);
    }

    public function show(Division $division)
    {
        // return $division;
        return view('divisions.show', compact('division'));
    }

    public function edit(Division $division)
    {
        return view('divisions.edit', compact('division'));
    }

    public function update(DivisionUpdateRequest $request, Division $division)
    {
        // $division = Division::find($id);
        $division->name = $request->name;
        $division->superior_name = $request->superior_name;
        $division->subdivisions = $request->subdivisions;
        $division->level = $request->level;
        $division->coworkers = $request->coworkers;
        $division->ambassador = $request->ambassador;

        $division->save();

        return redirect()->route('divisions.show', $division);
    }

    public function destroy(Division $division)
    {
        $division->delete();
        return response()->json([
            'message' => 'division deleted'
        ]);
        //
    }
}
