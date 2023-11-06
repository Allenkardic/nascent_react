import { Dictionary } from '../types';

function updateSavedPokemonListById(data: Dictionary[], id: number, newItem: Dictionary) {
  return data.map(item => {
    if (item.id === id) {
      // Update the existing object by creating a new object with the desired changes
      return {
        ...item,
        ...newItem,
      };
    }
    return item; // If the item's ID doesn't match, return it unchanged
  });
}

export default updateSavedPokemonListById;
