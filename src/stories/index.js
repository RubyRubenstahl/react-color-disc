import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import ColorWheel from "../ColorWheel";
import chroma from 'chroma-js'

storiesOf("Colorwheel", module).add("Basic Colorwheel", () => (
  <ColorWheel color={'lightgreen'} />
));
