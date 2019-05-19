import * as React from 'react';
import './Details.scss';


export interface DetailsJson {
    id: number,
    image: string,
    title: string,
    subTitle: string,
    time: string,
    browseNumber: number,
    info: string,
    content: string,
}

export interface DetailsProps {
    details: DetailsJson
}

class Details extends React.Component<DetailsProps >{
    constructor(props: DetailsProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="detailsBox">
                <h3>{this.props.details.title}</h3>
                <img alt="" className="detailsImg" src={this.props.details.image}/>
                <div className="subTitle">
                    <span>郭黎辉</span> / <span>读书</span> / 2019/5/9 09:40 / 阅读:673
                </div>
                <div dangerouslySetInnerHTML={{__html:this.props.details.content}}></div>
                <h3 className="commentText">评论</h3>
                <ul>
                    <li>
                        <div className="stairComment">
                            <img className="userAvatar" alt="" src={this.props.details.image}/>
                            <div className="userMsg">
                                <div className="commentTitle">厉害哦</div>
                                <div className="commentMsg">
                                    <span>小明</span> created at June 26, 2018 9:51 PM, Last updated at October 29, 2018 5:15 PM 
                                </div>
                                <div className="contentHtml" dangerouslySetInnerHTML={{__html:this.props.details.content}}></div>
                            </div>
                        </div>
                        <div className="secondComment">
                            <img className="userAvatar" alt="" src={this.props.details.image}/>
                            <div className="userMsg userMsg2">
                                <div className="commentTitle">厉害哦</div>
                                <div className="commentMsg">
                                    <span>小明</span> created at June 26, 2018 9:51 PM, Last updated at October 29, 2018 5:15 PM 
                                </div>
                                <div className="contentHtml" dangerouslySetInnerHTML={{__html:this.props.details.content}}></div>
                            </div>
                        </div>
                        <div className="operateBtn">
                            <div className="operateComBtn discussBtn">
                                <img alt="" src={require('../assets/discuss-icon.png')}/>
                                <span>全部谈论</span>
                            </div>
                            <div className="operateComBtn replyBtn">
                                <img alt="" src={require('../assets/reply-icon.png')}/>
                                <span>回复</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Details;