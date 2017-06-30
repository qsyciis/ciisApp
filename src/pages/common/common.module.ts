import { CommonRoutes } from './common.routes';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
//通用
import { LoginPage } from './login/login';
import { MainPage } from './main/main';
//我的桌面
import { HomePage } from '../desktop/home/home';
import { ResidentAreaPage } from '../desktop/residentArea/residentArea';
import { OrderPage } from '../desktop/order/order';
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
        ResidentAreaPage,
        OrderPage,
        ParameterPage,
        UserInfoPage,
        RolePage,
        UpdatePwPage
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(CommonRoutes,{useHash: false}),
    ]
})
export class CommonModule { }
