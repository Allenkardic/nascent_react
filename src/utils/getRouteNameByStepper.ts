import routesPath from './routesPath';
const { HOME, POKEMON, REVIEWPOKEMON } = routesPath;

const getRouteNameByStepper = (step: number) => {
  let result: string;
  if (step && step === 2) {
    result = POKEMON;
  } else if (step && step === 3) {
    result = REVIEWPOKEMON;
  } else {
    result = HOME;
  }

  return result;
};

export default getRouteNameByStepper;
