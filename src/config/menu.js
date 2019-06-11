/*
 * 侧边栏菜单数据文件
 */
import store from '@/store.js';

let menu = [
    {
		title : '商品管理',
		index : '7',
		sub_menu : [
			{
				id : '7-1',
				name : '发布商品',
				path : '/index/product-submit'
			},{
				id : '7-2',
				name : '已发布商品',
				path : '/index/product-data'
			},{
				id : '7-3',
				name : '快递设置',
				path : '/index/express-setting'
			},{
				id : '7-4',
				name : '商品规格属性管理',
				path : '/index/product-attr-setting'
			}
		]
	},{
        title : '订单管理',
        index : '4',
        sub_menu : [
            {
                id : '4-1',
                name : '订单列表',
                path : '/index/order'
            },{
                id : '4-3',
                name : '订单数据导出',
                path : '/index/order-export'
            }
        ]
    },{
        title : '财务管理',
        index : '5',
        sub_menu : [
            {
                id : '5-1',
                name : '交易流水',
                path : '/index/trade-data'
            },{
				id : '5-3',
				name : '运费流水',
				path : '/index/express-data'
			},{
				id : '5-4',
				name : '结算记录',
				path : '/index/settlement-record'
			},{
                id : '5-2',
                name : '导出财务数据',
                path : '/index/finance-data-export'
            }
        ]
    }
]

export default menu;