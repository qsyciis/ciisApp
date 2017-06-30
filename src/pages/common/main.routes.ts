import { Routes } from "@angular/router";

import { HomePage } from '../desktop/home/home';
import { ResidentAreaPage } from '../desktop/residentArea/residentArea';
import { OrderPage } from '../desktop/order/order';

import { ParameterPage } from '../system/parameter/parameter';
import { UserInfoPage } from '../system/userInfo/userInfo';
import { RolePage } from '../system/role/role';
import { UpdatePwPage } from '../system/updatePw/updatePw';

export const MainRoutes: Routes = [ // Routes类型的数组
    {
        path     : '',
        component: HomePage
    },
    {
        path     : 'desktop/home',//首页
        component: HomePage
    },{
        path     : 'desktop/residentArea',//住宅小区
        component: ResidentAreaPage
    },{
        path     : 'desktop/order',//订单管理
        component: OrderPage
    },{
        path     : 'system/parameter',//参数管理
        component: ParameterPage
    },{
        path     : 'system/userInfo',//参数管理
        component: UserInfoPage
    },{
        path     : 'system/role',//权限管理
        component: RolePage
    },{
        path     : 'system/updatePw',//修改密码
        component: UpdatePwPage
    },{
        path     : '**',
        component: HomePage
    },
];
