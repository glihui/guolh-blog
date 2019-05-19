import * as React from 'react';
import { connect } from 'react-redux'
import { Modal, Form, Checkbox, Input, Button, Icon, message} from 'antd';
import './Login.scss';
import {
    fetchPosts
} from '../actions/actions'

class Login extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = { visible: false };
    }
    showModal = () => {
        this.setState({
        visible: true,
        });
    };
    
    handleOk = (e:any) => {
        this.setState({
        visible: false,
        });
    };
    
    handleCancel = (e:any) => {
        this.setState({
        visible: false,
        });
    };

    handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields((err:any, values:any) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const { dispatch } = this.props

        

            dispatch(fetchPosts(JSON.stringify({name:values.username,password:values.password}))).then(() => {
                message.success('登录成功!');
                this.handleCancel(e);
            })
            
        

          }
        });
      };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{float:"right",height:"48px"}}>
                {
                 this.props.auth.id ? 
                 <div className="userAuth">
                    <span>{this.props.auth.name}</span>
                    <img alt="" src="http://bbs.guolh.com/uploads/images/avatars/201810/13//1_1539417887_r1N0tbukAX.jpeg"/>
                </div>
                :
                <div className="loginButton" onClick={this.showModal}>
                登录
                </div>
                }
                
                <Modal
                    title="登录"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={false}
                >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入账号!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住</Checkbox>)}
                        <a className="login-form-forgot" href="/">
                            忘记密码
                        </a>
                        <Button loading={this.props.isFetching} type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        Or <a href="/">注册</a>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

function mapStateToProps(state:any) {
    const { postsByUser } = state
    const {
        isFetching,
        lastUpdated = '',
        auth = {}
      } = postsByUser || {
        isFetching: true,
        auth: {}
      }
    
      return {
        auth,
        isFetching,
        lastUpdated
      }
}

export default connect(mapStateToProps)(LoginForm);