export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loadng: true };
    case "SUCCESS":
      return { ...state, catImage: action.payload, error: "", loadng: false };
    case "FAIL":
      return { ...state, catImage: "", error: action.payload, loadng: false };
    default:
      break;
  }
  return {};
};
