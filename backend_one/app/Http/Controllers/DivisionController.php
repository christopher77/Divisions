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
        $divisions = Division::all();
        // return $divisions;
        return  $divisions;
        // return view('divisions.index', compact('divisions'));
    }

    public function create()
    {
        //
        return view('divisions.create');
    }

    public function store(DivisionStoreRequest $request)
    {
        $division = Division::create($request->all());

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
        $division->update($request->all());

        return redirect()->route('divisions.show', $division);
    }

    public function destroy(Division $division)
    {
        $division->delete();
        return redirect()->route('divisions.index');
        //
    }
}
