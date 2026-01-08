// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products = []
) => {
  if (!products.length) return [];

  const { selectedPreferences, selectedFeatures } = formData;

  const scoredProducts = products.map((product) => {
    let score = 0;

    // Verifica preferências
    selectedPreferences.forEach((preference) => {
      if (product.preferences.includes(preference)) {
        score += 1; // Peso maior para preferências
      }
    });

    // Verifica características
    selectedFeatures.forEach((feature) => {
      if (product.features.includes(feature)) {
        score += 1; // Peso menor para características
      }
    });

    return { ...product, score };
  });

  const maxScore = Math.max(...scoredProducts.map((p) => p.score));

  return scoredProducts.filter((p) => p.score === maxScore);

};

export default { getRecommendations };
