@extends('layouts.plantilla')

@section('title','Divisions Edit')

@section('content')
<h1>Editar una division</h1>
<form action="{{route('divisions.update',$division)}}" method="post">
  @csrf
  @method('put')
  <label>
    Nombre:
    <input type="text" name="name" value="{{old('name',$division->name)}}"><br>
  </label>

  @error('name')
    <small>*{{$message}}</small>
    <br>
  @enderror

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
    <input type="number" name="level" value="{{old('level',$division->level)}}"><br>
  </label>

  @error('level')
    <small>*{{$message}}</small>
    <br>
  @enderror

  <label>
    Colaboradores:    
    <input type="number" name="coworkers" value="{{old('level',$division->coworkers)}}"><br>
  </label>

  @error('coworkers')
    <small>*{{$message}}</small>
    <br>
  @enderror

  <label>
    Embajador:    
    <input type="text" name="ambassador" value="{{$division->ambassador}}"><br>
  </label>
  <br>
  <button type="submit">Actualizar Formulario</button>
</form>
@endsection