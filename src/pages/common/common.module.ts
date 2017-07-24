import { CommonRoutes } from './common.routes';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TreeModule } from 'ng2-tree';
//通用
import { LoginPage } from './login/login';
import { MainPage } from './main/main';
//我的桌面
import { HomePage } from '../desktop/home/home';
import { CommunityPage } from '../desktop/community/community';
import { BuildingPage } from '../desktop/building/building';
import { RoomPage } from '../desktop/room/room';
import { ResidentPage } from '../desktop/resident/resident';
//系统管理
import { ParameterPage } from '../system/parameter/parameter';
import { UserInfoPage } from '../system/userInfo/userInfo';
import { RolePage } from '../system/role/role';
import { UpdatePwPage } from '../system/updatePw/updatePw';

@NgModule({
    declarations: [
        LoginPage,
        MainPage,
        HomePage,
        CommunityPage,
        BuildingPage,
        ParameterPage,
        UserInfoPage,
        RolePage,
        UpdatePwPage,
        RoomPage,
        ResidentPage
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TreeModule,
        RouterModule.forRoot(CommonRoutes,{useHash: false}),
    ]
})
export class CommonModule { }
