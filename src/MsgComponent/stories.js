import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MsgComponent from './index';

storiesOf('Msg Component Example', module)
.add('of Hello World', () => (
    <MsgComponent msg="World!"/>
))
.add('of Hello Developer', () => (
    <MsgComponent msg="Developer"/>
));