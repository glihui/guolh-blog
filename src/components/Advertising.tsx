import * as React from 'react';
import './Advertising.scss';

export interface AdvertisingItem {
    id: number,
    image: string,
    link: string
}

export interface AdvertisingList {
    advertising: Array<AdvertisingItem>
}


class Advertising extends React.Component<AdvertisingList> {
    constructor(props: AdvertisingList){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="AdvertisingBox">
                {
                    this.props.advertising.map((value, key) => {
                        return (
                            <img key={key} onClick={() => {
                                window.open(value.link);
                            }} alt="" src = {value.image}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default Advertising;