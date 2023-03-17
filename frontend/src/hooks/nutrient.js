import { useEffect, useState } from 'react';

function useNutrientState(data) {
  const [ nutrient, setNutrient ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    switch (data.key) {
      case 'calorieCount': setNutrient({ unit: 'kCal', icon: 'energy', type: 'Calories' });
      break;
      case 'proteinCount': setNutrient({ unit: 'g', icon: 'chicken', type: 'Proteines' });
      break;
      case 'carbohydrateCount': setNutrient({ unit: 'g', icon: 'apple', type: 'Glucides' });
      break;
      case 'lipidCount': setNutrient({ unit: 'g', icon: 'cheeseburger', type: 'Lipides' });
      break;
      default: null;
    }

    setIsLoading(false);
  }, []);

  return { nutrient, isLoading };
}

export default useNutrientState;