@extends('layouts.plantilla')

@section('title','Divisions '. $division->name)

@section('content')
<h1>Bienvenido a la Division {{$division->name}}</h1>
<a href="{{route('divisions.index')}}">Volver al Listado de Divisiones</a><br>
<a href="{{route('divisions.edit',$division)}}">Editar Division</a>
<p><strong>Numero de Subdivisiones:</strong></p>
<p>{{$division->subdivisions}}</p>
@endsection