<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VehiculeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'availability' => 'string|max:255',
            'type_vehicule' => 'string|max:255',
            'marque' => 'string|max:255',
            'modele' => 'string|max:255',
            'price' => 'string|max:255',
            'mileage' => 'string|max:255',
            'type_carburant' => 'string|max:255',
        ];
    }
}
