<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VehiculeResource\Pages;
use App\Filament\Resources\VehiculeResource\RelationManagers;
use App\Models\Vehicule;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class VehiculeResource extends Resource
{
    protected static ?string $model = Vehicule::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('modele_id')
                    ->label('Modèle de la voiture')
                    ->relationship('modele', 'name')
                    ->searchable()
                    ->preload()
                    ->createOptionForm([
                        Forms\Components\TextInput::make('name')
                            ->label('Nom du modèle')
                            ->required()
                    ])
                    ->required(),
                Forms\Components\Select::make('type_vehicule_id')
                    ->label('Type de la voiture')
                    ->relationship('typeVehicule', 'label')
                    ->searchable()
                    ->preload()
                    ->createOptionForm([
                        Forms\Components\TextInput::make('label')
                            ->label('Nom du type')
                            ->required()
                    ])
                    ->required(),
                Forms\Components\TextInput::make('manufacture_year')
                    ->label('Année de Fabrication')
                    ->required(),
                Forms\Components\TextInput::make('mileage')
                    ->label('Kilométrage')
                    ->required(),
                Forms\Components\TextInput::make('price')
                    ->label('Prix')
                    ->required(),
                Forms\Components\Select::make('type_carburant')
                    ->label('Type de carburant')
                    ->options([
                        'diesel' => 'Dièsel',
                        'essence' => 'Essence',
                    ])
                    ->required(),
                Forms\Components\TextInput::make('transmission')
                    ->label('Transmission')
                    ->required(),
                Forms\Components\MarkdownEditor::make('description')
                    ->label('Description de la voiture')
                    ->required(),
                Forms\Components\Toggle::make('climatisation')
                    ->label('Climatisation')
                    ->onColor('success')
                    ->offColor('danger'),
                Forms\Components\Toggle::make('gps')
                    ->label('GPS')
                    ->onColor('success')
                    ->offColor('danger'),
                Forms\Components\Toggle::make('sieges_cuir')
                    ->label('Sièges en cuir')
                    ->onColor('success')
                    ->offColor('danger'),
                Forms\Components\Toggle::make('sieges_chauffants')
                    ->label('Sièges chauffants')
                    ->onColor('success')
                    ->offColor('danger'),
                Forms\Components\Toggle::make('toit_ouvrant')
                    ->label('Toit ouvrant')
                    ->onColor('success')
                    ->offColor('danger'),
                Forms\Components\Toggle::make('bluetooth')
                    ->label('Bluetooth')
                    ->onColor('success')
                    ->offColor('danger'),
                Forms\Components\Toggle::make('camera_recul')
                    ->label('Caméra de recul')
                    ->onColor('success')
                    ->offColor('danger'),
                Forms\Components\Radio::make('availability')
                    ->options([
                        'available' => 'Disponible',
                        'reserved' => 'Réserver',
                        'sold' => 'En Solde'
                    ])
                    ->required(),
                Forms\Components\Repeater::make('photos')
                    ->relationship('photos')
                    ->schema([
                        Forms\Components\FileUpload::make('url')
                            ->label('Image')
                            ->image()
                            ->directory('voitures')
                            ->required(),
                    ])
                    ->label('Images de la voiture')
                    ->minItems(1)
                    ->collapsible(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListVehicules::route('/'),
            'create' => Pages\CreateVehicule::route('/create'),
            'edit' => Pages\EditVehicule::route('/{record}/edit'),
        ];
    }
}
