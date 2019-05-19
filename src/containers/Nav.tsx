import * as React from 'react';
import Nav from '../components/Nav';


class NavContainser extends React.Component<object> {
    state = {
        navArray: [
            {
                icon:'../assets/php-icon.png',
                title: 'Flutter'
            },
            {
                icon:'.../assets/php-icon.png',
                title: 'JavaScript'
            },
            {
                icon:'../assets/php-icon.png',
                title: 'Php'
            }
        ] 
    }
    render() {
        return (
            <Nav name='郭黎辉的官方网站' navArray={this.state.navArray}/>
        );
    }
}

export default NavContainser;