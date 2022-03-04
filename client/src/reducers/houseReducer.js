export default function houseReducer(state, action) {
  let newState;
  switch (action.type) {
    case "addHouse":
      break;
    default:
      newState = { house: [...state.house] };
      break;
  }
  return newState;
}
