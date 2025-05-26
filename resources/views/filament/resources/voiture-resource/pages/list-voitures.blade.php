<x-filament::page>
    <div>
    <div class="mb-4">
        <x-filament::button tag="a" href="{{ route('filament.admin.resources.vehicules.create') }}">
            + Ajouter une voiture
        </x-filament::button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        @foreach (\App\Models\Vehicule::latest()->get() as $voiture)
            <x-filament::card>
                <img src="{{ Storage::url($voiture->photos->first()?->url) }}"
                     alt="Image"
                     class="w-full h-40 object-cover rounded mb-2" />

                <div class="text-sm text-gray-700">
                    Marque : {{ $voiture->modele->marque->name ?? 'Non défini' }}
                </div>
                <div class="text-lg font-bold">Modèle: {{ $voiture->modele->name ?? 'Modèle inconnu' }}</div>
                <div class="text-sm text-gray-700">Année : {{ $voiture->manufacture_year }}</div>
                <div class="text-sm text-gray-700">Kilométrage : {{ $voiture->mileage }} km</div>
                <div class="text-sm text-gray-700 mb-2">Prix : {{ $voiture->price }} $</div>

                {{-- Badges d'options --}}
                <div class="flex flex-wrap gap-1 mb-2">
                    @if ($voiture->gps)
                        <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">GPS</span>
                    @endif
                    @if ($voiture->bluetooth)
                        <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Bluetooth</span>
                    @endif
                    @if ($voiture->climatisation)
                        <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Climatisation</span>
                    @endif
                    @if ($voiture->sieges_cuir)
                        <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Cuir</span>
                    @endif
                </div>

                {{-- Badge de statut --}}
                <div class="mb-2">
                    @php
                        $availability = $voiture->availability ?? 'unknown';
                        $colors = [
                            'available' => 'bg-green-100 text-green-800',
                            'reserved' => 'bg-yellow-100 text-yellow-800',
                            'sold' => 'bg-red-100 text-red-800',
                        ];
                        $colorClass = $colors[$availability] ?? 'bg-gray-200 text-gray-800';
                    @endphp

                    <span class="text-xs px-3 py-1 rounded-full {{ $colorClass }}">
                        {{ ucfirst($availability) }}
                    </span>
                </div>
                {{-- Bouton Modifier --}}
                <div class="mt-2 flex gap-2">
                    {{-- Bouton Modifier --}}
                    <x-filament::button
                        tag="a"
                        size="sm"
                        href="{{ route('filament.admin.resources.vehicules.edit', $voiture->id) }}"
                    >
                        Modifier
                    </x-filament::button>
                    {{-- <form
                        method="POST"
                        action="{{ route('filament.admin.resources.vehicules.destroy', $voiture->id) }}"
                        onsubmit="return confirm('Supprimer cette voiture ?');"
                    >
                        @csrf
                        @method('DELETE')
                        <x-filament::button color="danger" size="sm" type="submit">
                            Supprimer
                        </x-filament::button>
                    </form> --}}
                </div>

            </x-filament::card>
        @endforeach
    </div>
</div>

</x-filament::page>
