// Form.js

import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';

function Form({ onSubmit, recommendations }) {
  const { preferences, features} = useProducts();

  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

  };

  return (
    <form
      className="p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" />

      {recommendations.length > 0 && (
  <div className="mt-6 border-t pt-4">
    <h2 className="text-xl font-semibold mb-4">
      Lista de Recomendações:
    </h2>

    <ul className="space-y-3">
      {recommendations.map((product) => (
        <li
          key={product.id}
          className="p-4 border rounded-md bg-gray-50 shadow-sm"
        >
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-sm text-gray-600">
            {product.description}
          </p>
        </li>
      ))}
    </ul>
  </div>
)}
    </form>
  );
}

export default Form;
