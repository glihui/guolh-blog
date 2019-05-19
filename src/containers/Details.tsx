import * as React from 'react';
import Advertising from '../components/Advertising';
import Details from '../components/Details';


class DetailsContainser extends React.Component<object> {
    state = {
        detailsDate: {
            id: 1,
            image: 'http://bbs.guolh.com/uploads/images/avatars/201810/13//1_1539417887_r1N0tbukAX.jpeg',
            title: '厦门美食指南',
            subTitle: '读书',
            time: '2019/5/7',
            browseNumber: 400,
            info: '厦门市一座很美丽的城市，有机会要去走一走，真的很美丽',
            content: '<div>厦门市一座很美丽的城市，有机会要去走一走，真的很美丽</div>',
        },
        advertisingList: [
           {
                id: 1,
                image: 'http://chat.guolh.com:3000/sa_image.png',
                link: 'https://cloud.tencent.com/act/campus'
           } 
        ]
    }
    render() {
        return (
            <div style={{
                display: "flex",
                marginTop:"10px",
                }}>
                <Details details={this.state.detailsDate}/>
                <Advertising advertising={this.state.advertisingList}/>
            </div>
        );
    }
}

export default DetailsContainser;