import NutrientCard from './NutrientCard';

function NutrientGroup() {
  return (
    <>
      <NutrientCard className="Calorie" icon="energy" data="1,930kCal" type="Calories" />
      <NutrientCard className="Protein" icon="chicken" data="155g" type="Proteines" />
      <NutrientCard className="Carbohydrate" icon="apple" data="290g" type="Glucides" />
      <NutrientCard className="Lipid" icon="cheeseburger" data="50g" type="Lipides" />
    </>
  );
}

export default NutrientGroup;
