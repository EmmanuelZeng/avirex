import { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import axios from 'axios';

export default function FilterSidebar({ brands, models: initialModels, filters }) {
  const [models, setModels] = useState(initialModels);

  const { data, setData, get, processing } = useForm({
    state: filters.state ?? 'all',
    type: filters.type ?? 'all',
    brand_id: filters.brand_id ?? '',
    model_id: filters.model_id ?? '',
    price_min: filters.price_min ?? '',
    price_max: filters.price_max ?? '',
    mileage_min: filters.mileage_min ?? '',
    mileage_max: filters.mileage_max ?? '',
    fuel: filters.fuel ?? 'all',
  });

  // Requête les modèles lorsque la marque change
  useEffect(() => {
    if (!data.brand_id) { setModels([]); setData('model_id', ''); return; }
    axios.get(route('brands.models', data.brand_id)).then(r => setModels(r.data));
  }, [data.brand_id]);

  const apply = (e) => {
    e.preventDefault();
    get(route('vehicles.index'));
  };

  return (
    <form onSubmit={apply} className="md:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-primary mb-6">Filtres</h3>

        {/* État */}
        <SelectField label="État" name="state" value={data.state} onChange={e=>setData('state',e.target.value)}>
          <option value="all">Tous</option>
          <option value="new">Neuf</option>
          <option value="used">Occasion</option>
        </SelectField>

        {/* Type */}
        <SelectField label="Type de véhicule" name="type" value={data.type} onChange={e=>setData('type',e.target.value)}>
          <option value="all">Tous</option>
          <option value="berline">Berline</option>
          <option value="suv">SUV</option>
          <option value="coupe">Coupé</option>
          <option value="cabriolet">Cabriolet</option>
          <option value="break">Break</option>
        </SelectField>

        {/* Marque */}
        <SelectField label="Marque" name="brand_id" value={data.brand_id} onChange={e=>setData('brand_id',e.target.value)}>
          <option value="">Toutes</option>
          {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
        </SelectField>

        {/* Modèle dépendant */}
        <SelectField label="Modèle" name="model_id" value={data.model_id} onChange={e=>setData('model_id',e.target.value)} disabled={!models.length}>
          <option value="">Tous</option>
          {models.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </SelectField>

        {/* Prix */}
        <RangeField label="Prix" minName="price_min" maxName="price_max" data={data} setData={setData} />

        {/* Kilométrage */}
        <RangeField label="Kilométrage" minName="mileage_min" maxName="mileage_max" data={data} setData={setData} />

        {/* Carburant */}
        <SelectField label="Carburant" name="fuel" value={data.fuel} onChange={e=>setData('fuel',e.target.value)}>
          <option value="all">Tous</option>
          <option value="essence">Essence</option>
          <option value="diesel">Diesel</option>
          <option value="electrique">Électrique</option>
          <option value="hybride">Hybride</option>
        </SelectField>

        <button type="submit" className="w-full bg-secondary text-primary py-3 rounded font-bold hover:bg-opacity-90 transition disabled:opacity-50" disabled={processing}>
          {processing ? 'Filtrage…' : 'Appliquer les filtres'}
        </button>
      </div>
    </form>
  );
}

// Helpers (pensez à isoler dans un dossier components/shared)
function SelectField({ label, children, ...rest }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <select {...rest} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-100">
        {children}
      </select>
    </div>
  );
}

function RangeField({ label, minName, maxName, data, setData }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <div className="flex items-center gap-2">
        <input type="number" placeholder="Min" value={data[minName]} onChange={e=>setData(minName,e.target.value)} className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        <span>-</span>
        <input type="number" placeholder="Max" value={data[maxName]} onChange={e=>setData(maxName,e.target.value)} className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
      </div>
    </div>
  );
}
