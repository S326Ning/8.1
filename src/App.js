import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import HomeImage from './HomeImage';
import BottomNavigationBar from './BottomNavigationBar';
import CardList from './CardList';
import 'semantic-ui-css/semantic.min.css'

function App(){
    return(
        <div>
            <TopNavigationBar/>
            <HomeImage/>
            <CardList/>
            <BottomNavigationBar/>
        </div>
    )
}

export default App