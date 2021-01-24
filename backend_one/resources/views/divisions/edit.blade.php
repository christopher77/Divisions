@extends('layouts.plantilla')

@section('title','Divisions create')

@section('content')
<h1>Editar una division</h1>
<form action="{{route('divisions.update',$division)}}" method="post">
  @csrf
  @method('put')
  <label>
    Nombre:
    <input type="text" name="name" value="{{$division->name}}"><br>
  </label>
  <label>
    Division Superior:    
    <input type="text" name="superior_name" value="{{$division->superior_name}}"><br>
  </label>
  <label>
    Subdivisiones:    
    <input type="number" name="subdivisions" value="{{$division->subdivisions}}"><br>
  </label>
  <label>
    Nivel:    
    <input type="number" name="level" value="{{$division->level}}"><br>
  </label>
  <label>
    Colaboradores:    
    <input type="number" name="coworkers" value="{{$division->coworkers}}"><br>
  </label>
  <label>
    Embajador:    
    <input type="text" name="ambassador" value="{{$division->ambassador}}"><br>
  </label>
  <br>
  <button type="submit">Actualizar Formulario</button>
</form>
@endsection