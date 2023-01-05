import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import theme from "./theme";
import { icons } from "./icons";

// import styles

import "vuetify/styles";

export default createVuetify({
  theme,
  components,
  directives,
  icons,
});
