<?php

namespace Database\Factories;

use App\Models\Division;
use Illuminate\Database\Eloquent\Factories\Factory;

class DivisionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Division::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->sentence(),
            'superior_name' => $this->faker->randomElement(['Direccion general', 'Producto', 'Operaciones', '']),
            'subdivisions' => $this->faker->numberBetween(1, 10),
            'level' => $this->faker->numberBetween(1, 5),
            'coworkers' => $this->faker->numberBetween(1, 50),
            'ambassador' => $this->faker->randomElement([$this->faker->name, '']),
        ];
    }
}
