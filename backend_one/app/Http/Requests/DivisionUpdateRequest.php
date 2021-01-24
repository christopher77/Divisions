<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DivisionUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|max:45|unique:divisions,name,' . $this->division->id,
            'level' => 'required',
            'coworkers' => 'required'
            //
        ];
    }
}
