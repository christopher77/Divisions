@extends('layouts.plantilla')

@section('title','Divisions create')

@section('content')
<h1>Crear una division</h1>
<form action="{{route('divisions.store')}}" method="POST">
  @csrf
  <label>
    Nombre:
    <input type="text" name="name" value="{{old('name')}}"><br>
  </label>

  @error('name')
    <small>*{{$message}}</small>
    <br>
  @enderror

  <label>
    Division Superior:    
    <input type="text" name="superior_name" value="{{old('superior_name')}}"><br>
  </label>
  <label>
    Subdivisiones:    
    <input type="number" name="subdivisions" value="{{old('subdivisions')}}"><br>
  </label>
  <label>
    Nivel:    
    <input type="number" name="level" value="{{old('level')}}"><br>
  </label>
  @error('level')
    <small>*{{$message}}</small>
    <br>
  @enderror
  <label>
    Colaboradores:    
    <input type="number" name="coworkers" value="{{old('coworkers')}}"><br>
  </label>
  @error('coworkers')
    <small>*{{$message}}</small>
    <br>
  @enderror
  <label>
    Embajador:    
    <input type="text" name="ambassador" value="{{old('ambassador')}}"><br>
  </label>
  <br>
  <button type="submit">Enviar Formulario</button>
</form>
@endsection