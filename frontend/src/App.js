import React from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import useProducts from './hooks/useProducts';
import useRecommendations from './hooks/useRecommendations';

function App() {
  const { products } = useProducts();

  const {
    recommendations,
    getRecommendations,
    setRecommendations,
  } = useRecommendations(products);

  const handleFormSubmit = (formData) => {
    const result = getRecommendations(formData);

    if (formData.selectedRecommendationType === 'SingleProduct') {
      setRecommendations(result.slice(-1));
    } else {
      setRecommendations(result);
    }
  };

  return (
     <div className="min-h-screen bg-gray-100 px-4 flex flex-col justify-center items-center py-8">
      <h1 className="text-3xl font-bold mb-8">
        Recomendador de Produtos RD Station
      </h1>

      <div className="justify-center">
        <div className="w-full max-w-8xl bg-white rounded-lg shadow-md p-8">
          <Form 
          onSubmit={handleFormSubmit}
          recommendations={recommendations}
          />
        </div>
      </div>
    </div>
  );
}

export default App;