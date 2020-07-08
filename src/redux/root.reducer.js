import { combineReducers } from "redux";

// reducers
import userReducer from "./user/user.reducer";
import sidenavReducer from "./sidenav/sidenav.reducer";
import modalReducer from "./modal/modal.reducer";
import channelsReducer from "./channels/channels.reducer";
import messagesReducer from "./messages/messages.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  sidenav: sidenavReducer,
  modal: modalReducer,
  channels: channelsReducer,
  messages: messagesReducer
});

export default rootReducer;
