<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Vehicule;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\{
    Grid, Section, Select, TextInput, MarkdownEditor,
    Toggle, Radio, Repeater, FileUpload};
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\VehiculeResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\VehiculeResource\RelationManagers;

class VehiculeResource extends Resource
{
    protected static ?string $navigationLabel = 'Véhicules';
    protected static ?string $model = Vehicule::class;

    protected static ?string $navigationIcon = 'heroicon-o-truck';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                 Grid::make(2)
                ->schema([
                    Select::make('modele_id')
                        ->label('Modèle de la voiture')
                        ->relationship('modele', 'name')
                        ->searchable()
                        ->preload()
                        ->createOptionForm([
                            TextInput::make('name')
                                ->label('Nom du modèle')
                                ->required(),
                        ])
                        ->required(),

                    Select::make('type_vehicule_id')
                        ->label('Type de la voiture')
                        ->relationship('typeVehicule', 'label')
                        ->searchable()
                        ->preload()
                        ->createOptionForm([
                            TextInput::make('label')
                                ->label('Nom du type')
                                ->required(),
                        ])
                        ->required(),

                    TextInput::make('manufacture_year')
                        ->label('Année de fabrication')
                        ->required(),

                    TextInput::make('mileage')
                        ->label('Kilométrage')
                        ->required(),

                    TextInput::make('price')
                        ->label('Prix')
                        ->required(),

                    Select::make('type_carburant')
                        ->label('Type de carburant')
                        ->options([
                            'diesel'   => 'Dièsel',
                            'essence'  => 'Essence',
                        ])
                        ->required(),

                    TextInput::make('transmission')
                        ->label('Transmission')
                        ->required(),

                    /* Description sur 2 colonnes */
                    MarkdownEditor::make('description')
                        ->label('Description de la voiture')
                        ->required()
                        ->columnSpan(2),
                ]),

            /* ──────────── Options (toggles, 3 colonnes) ──────────── */
            Section::make('Options & équipements')
                ->schema([
                    Grid::make(3)
                        ->schema([
                            Toggle::make('climatisation')->label('Climatisation'),
                            Toggle::make('gps')->label('GPS'),
                            Toggle::make('sieges_cuir')->label('Sièges en cuir'),
                            Toggle::make('sieges_chauffants')->label('Sièges chauffants'),
                            Toggle::make('toit_ouvrant')->label('Toit ouvrant'),
                            Toggle::make('bluetooth')->label('Bluetooth'),
                            Toggle::make('camera_recul')->label('Caméra de recul'),
                        ]),
                ])
                ->collapsible(),   // optionnel : section repliable

            /* ──────────── Disponibilité ──────────── */
            Radio::make('availability')
                ->label('Disponibilité')
                ->options([
                    'available' => 'Disponible',
                    'reserved'  => 'Réservée',
                    'sold'      => 'En solde',
                ])
                ->columns(3)
                ->required(),

            /* ──────────── Images (largeur complète) ──────────── */
            Section::make('Images')
                ->schema([
                    Repeater::make('photos')
                        ->relationship('photos')
                        ->schema([
                            FileUpload::make('url')
                                ->label('Image')
                                ->image()
                                ->directory('voitures')
                                ->required(),
                        ])
                        ->label('Images de la voiture')
                        ->minItems(1)
                        ->collapsible(),
                ]),

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
                Tables\Actions\DeleteAction::make(),
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
