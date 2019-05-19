import * as React from 'react';
import Home from '../components/Home';



class HomeContainser extends React.Component<any> {

    constructor(props:any) {
        super(props);
        this.state = {};
    }
    
    componentDidMount = () => {

    }

    render() {
        return (
            <Home/>
        );
    }
}


export default HomeContainser;