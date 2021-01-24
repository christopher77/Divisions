@extends('layouts.plantilla')

@section('title','Divisions')

@section('content')
<h1>Listado de Divisiones</h1>
<a href="{{route('divisions.create')}}">Crear Division</a>
<ul>
  @foreach ($divisions as $division)
      <li>
        <a href="{{route('divisions.show',$division->id)}}">{{$division->name}}</a>
      </li>
  @endforeach
</ul>
@endsection
