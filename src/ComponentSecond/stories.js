import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ComponentSecond from './index';

storiesOf('Component Example', module)
.add('of example', () => (
    <ComponentSecond/>
));