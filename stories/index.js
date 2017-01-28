import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ComponentOne from '../src/ComponentOne';

storiesOf('Component One Example', module)
    .add('Example Story', () => (
        <ComponentOne showApp={linkTo('Button')}/>
    ));