import { Routes } from "@angular/router";

import { HomePage } from '../desktop/home/home';
import { ResidentAreaPage } from '../desktop/residentArea/residentArea';
import { BuildingPage } from '../desktop/building/building';
import { RoomPage } from '../desktop/room/room';

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
        path     : 'desktop/building',//楼栋管理
        component: BuildingPage
    },{
        path     : 'desktop/room',//房间管理
        component: RoomPage
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
