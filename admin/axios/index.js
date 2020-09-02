import apiLogin from './interface/login'


const install = Vue => {
    if (install.installed)
        return;
    install.installed = true;

    Object.defineProperties(Vue.prototype, {
        $ajax: {
            get(){
                return Object.assign(
                    {},
                    apiLogin
                )
            }
        }
    })
}

export default install