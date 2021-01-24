<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DivisionStoreRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|max:45|unique:divisions,name',
            'level' => 'required',
            'coworkers' => 'required',
            //
        ];
    }
}
