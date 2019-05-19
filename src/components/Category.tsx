import React from 'react';
import './Category.scss';
import { Pagination } from 'antd';
import { Link } from "react-router-dom";

export interface categoryItemJson {
    id: number,
    image: string,
    title: string,
    subTitle: string,
    time: string,
    browseNumber: number,
    info: string,
}

export interface categoryList {
    categoryList: Array<categoryItemJson>
}

class Category extends React.Component<categoryList>{
    constructor(props: categoryList){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="categoryBox">
                <ul>
                    {
                        this.props.categoryList.map((value,key) => {
                            return (
                                <li key={value.id}>
                                    <Link to={`/category/details/${value.id}`}>
                                        <div className="categoryItem">
                                            <img alt="" src="http://bbs.guolh.com/uploads/images/avatars/201810/13//1_1539417887_r1N0tbukAX.jpeg"/>
                                            <div className="categoryMsg">
                                                <div className="categoryTitle">厦门美食指南</div>
                                                <div className="categorySubTitle">
                                                    <span className="categoryFlag">
                                                        读书 
                                                    </span>
                                                    <span>
                                                        /2019/5/7 阅读:330
                                                    </span>
                                                </div>
                                                <div className="intro">厦门市一座很美丽的城市，有机会要去走一走，真的很美丽。</div>
                                            </div>
                                        </div>
                                        <div className="continuteBtn">
                                            继续阅读
                                        </div>
                                    </Link>
                                </li>
                            );
                        })
                    }
                    </ul>
                <Pagination defaultCurrent={6} total={500} />,
            </div>
        );
    }
}

export default Category;