import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ColorWheel from "../src/ColorWheel";
import ControlledColorWheel from "../src/Examples/ControlledColorWheel";

storiesOf("ColorWheel", module)
    .add("Basic ColorWheel", () => (
        <ColorWheel color={"red"} onChange={action("Change")} />
    ))
    .add("Controlled ColorWheel", () => <ControlledColorWheel />);