import * as React from 'react';
import Category from '../components/Category';
import Advertising from '../components/Advertising';


class CategoryContainser extends React.Component<object> {
    state = {
        categoryList: [
            {
                id: 1,
                image: 'http://bbs.guolh.com/uploads/images/avatars/201810/13//1_1539417887_r1N0tbukAX.jpeg',
                title: '厦门美食指南',
                subTitle: '读书',
                time: '2019/5/7',
                browseNumber: 400,
                info: '厦门市一座很美丽的城市，有机会要去走一走，真的很美丽',
            },
            {
                id: 2,
                image: 'http://bbs.guolh.com/uploads/images/avatars/201810/13//1_1539417887_r1N0tbukAX.jpeg',
                title: '厦门美食指南',
                subTitle: '读书',
                time: '2019/5/7',
                browseNumber: 400,
                info: '厦门市一座很美丽的城市，有机会要去走一走，真的很美丽',
            },
            {
                id: 3,
                image: 'http://bbs.guolh.com/uploads/images/avatars/201810/13//1_1539417887_r1N0tbukAX.jpeg',
                title: '厦门美食指南',
                subTitle: '读书',
                time: '2019/5/7',
                browseNumber: 400,
                info: '厦门市一座很美丽的城市，有机会要去走一走，真的很美丽',
            },
        ],
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
                clear:"both",
                }}>
                <Category categoryList={this.state.categoryList}/>
                <Advertising advertising={this.state.advertisingList}/>
            </div>
        );
    }
}

export default CategoryContainser;