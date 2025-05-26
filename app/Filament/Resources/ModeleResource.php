<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ModeleResource\Pages;
use App\Filament\Resources\ModeleResource\RelationManagers;
use App\Models\Modele;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ModeleResource extends Resource
{
    protected static ?string $navigationLabel = 'Modèles de voiture';
    protected static ?string $model = Modele::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('Nom du modèle')
                    ->required(),
                Forms\Components\Select::make('marque_id')
                    ->label('Selection de la marque')
                    ->relationship('marque', 'name')
                    ->searchable()
                    ->preload()
                    ->createOptionForm([
                        Forms\Components\TextInput::make('name')
                            ->label('Nom de la marque')
                            ->required()
                    ])
                    ->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Noms de Modèle')
                    ->searchable(),
                Tables\Columns\TextColumn::make('marque.name')
                    ->label('Marque'),
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
            'index' => Pages\ListModeles::route('/'),
            'create' => Pages\CreateModele::route('/create'),
            'edit' => Pages\EditModele::route('/{record}/edit'),
        ];
    }
}
