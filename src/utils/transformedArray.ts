import { Dictionary } from '../types';

function transformedArray(data: Dictionary[]) {
  return data.map(item => {
    const transformedItem: Dictionary = {}; // Create an empty object

    // Iterate over the object's keys and create new objects
    for (const key of Object.keys(item)) {
      transformedItem[key] = { text: key, helperText: item[key] };
    }

    return transformedItem;
  });
}

export default transformedArray;
