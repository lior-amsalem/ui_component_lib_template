import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import * as Components from '../src';
import './development.scss';

const DevelopmentEnv = ({params}) => {
    const componentName = params.component,
        Comp = Components[componentName];

    if (Comp){
        console.log(`[DEVELOPMENT] Start Development of ${componentName} component`);

        return <Comp/>;
    }

    console.log('[DEVELOPMENT] Component Not Found!')

    return <ComponentsList componentName={componentName}/>;
};

const ComponentsList = ({componentName}) => {

    const isDueToError = componentName;

    return <div>
        {isDueToError && <p>ERROR - Couldn't find <strong>{componentName}</strong> component - pick one from this list:</p>}

        <ul>
            {Object.keys(Components).map((componentName) => {
                return <li key={componentName}><a href={componentName}>{componentName}</a></li>
            })}
        </ul>
    </div>;
};

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/dev/:component" component={DevelopmentEnv}/>
    </Router>
), document.querySelector('.dev'));