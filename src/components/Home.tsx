import React from 'react';
import { Carousel } from 'antd';
import './Home.scss';

class Home extends React.Component<object>{
    render() {
        return (
            <div>
                <div className="carouseBox">
                    <Carousel autoplay>
                        <div className="carouselImg">
                            <img alt="" src={require('../assets/banner1.jpg')}/>
                        </div>
                        <div className="carouselImg">
                            <img alt="" src={require('../assets/banner2.jpg')}/>
                        </div>
                        <div className="carouselImg">
                            <img alt="" src={require('../assets/banner3.jpeg')}/>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Home;