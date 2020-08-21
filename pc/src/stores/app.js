/**
 * @name: app.js
 * @author: LIULIU
 * @date: 2020-08-21 14:47
 * @description：app.js
 * @update: 2020-08-21 14:47
 */
import {observable, action} from 'mobx';

class AppStore {
    @observable  demoName =  '这是一个模版'
}
export default new AppStore();
