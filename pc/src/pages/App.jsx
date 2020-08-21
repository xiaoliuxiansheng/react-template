/**
 * @name: App
 * @author: LIULIU
 * @date: 2020-08-21 13:51
 * @description：App
 * @update: 2020-08-21 13:51
 */
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {EnvironmentOutlined} from  '@ant-design/icons';
import './app.less'
@inject( "appStore")
@observer
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {demoName} = this.props.appStore
        return (
            <div className="App">
                <EnvironmentOutlined />
                {demoName}
            </div>
        )
    }
}
export default App;
