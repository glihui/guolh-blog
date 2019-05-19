import * as React from 'react';

import './Nav.scss';

import { Link } from 'react-router-dom';

import Login from '../containers/Login';

interface NavJson {
    icon: string,
    title: string
}

export interface Props {
   name: string, 
   navArray: Array<NavJson>, 
}

interface State {
    currentIndex: number;
  }

class Nav extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            currentIndex: 99,
        }
    }
    
    

    handleNav = (index: number) => {
        this.setState({
            currentIndex: index
        });
    
    }

    render() {
        return (
            <div className="navBox">
                <div className="websiteName">
                    {this.props.name}
                </div>
                <ul className="navUl">
                {
                    this.props.navArray.map((value, key) => {
                        return (
                            <Link to={`/category/${key}`} key={key}>
                                <li
                                className={`item ${this.state.currentIndex === key ? 'itemActive': ''}`}
                                onClick={() => {
                                    this.handleNav(key);
                                }}>
                                    <img className="itemImg" alt="" src={require('../assets/php-icon.png')}/>
                                    <span>
                                        {value.title}
                                    </span>
                                </li>
                            </Link>
                        );
                    })
                }
                </ul>
                <Login/>
            </div>
        );
    }
}

export default Nav;