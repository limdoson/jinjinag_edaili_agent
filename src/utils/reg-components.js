import None from '@c/None'

function vComponent(Vue) {
	// 判断组件组件是否已安装
	if(vComponent.installed){
		return;
	}
	Vue.component('none',None);
}
// 导出组件
export default vComponent