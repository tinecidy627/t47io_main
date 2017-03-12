import * as actionTypes from '../constants/actionTypes.js';
import {
  SKILLS,
  SKILLS_LEFT,
  SKILLS_RIGHT,
} from '../constants/sectionTypes.js';


const initialState = {
  data: {
    items: {
      left: [],
      right: [],
    },
    length: {
      left: 0,
      right: 0,
    },
  },
  animations: {
    header: true,
    left: NaN,
    right: NaN,
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.TOGGLE_HEADER_ANIMATION:
      if (payload.section === SKILLS) {
        return {
          ...state,
          animations: {
            ...state.animations,
            header: payload.status,
          },
        };
      }
      return state;

    case actionTypes.TOGGLE_SKILLS_PROGRESSBAR_ANIMATION:
      return {
        ...state,
        animations: {
          ...state.animations,
          left: (payload.side === SKILLS_LEFT) ? payload.status : state.animations.left,
          right: (payload.side === SKILLS_RIGHT) ? payload.status : state.animations.right,
        },
      };

    default:
      return state;
  }
};


export default reducer;
