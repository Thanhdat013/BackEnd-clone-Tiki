'use strict';function _0x4e49(_0x551b9a,_0x3b4ec0){var _0x48f3e0=_0x48f3();return _0x4e49=function(_0x4e4941,_0x4e9708){_0x4e4941=_0x4e4941-0xe5;var _0x3ea632=_0x48f3e0[_0x4e4941];return _0x3ea632;},_0x4e49(_0x551b9a,_0x3b4ec0);}var _0x116f15=_0x4e49;(function(_0x4343dd,_0x3c5d85){var _0x124532=_0x4e49,_0x53a0cc=_0x4343dd();while(!![]){try{var _0x1b4a74=-parseInt(_0x124532(0x105))/0x1*(parseInt(_0x124532(0x117))/0x2)+parseInt(_0x124532(0x10d))/0x3+-parseInt(_0x124532(0x125))/0x4*(-parseInt(_0x124532(0xfc))/0x5)+-parseInt(_0x124532(0xe7))/0x6*(parseInt(_0x124532(0x10b))/0x7)+-parseInt(_0x124532(0x100))/0x8+parseInt(_0x124532(0x102))/0x9+parseInt(_0x124532(0xff))/0xa;if(_0x1b4a74===_0x3c5d85)break;else _0x53a0cc['push'](_0x53a0cc['shift']());}catch(_0x45aa6c){_0x53a0cc['push'](_0x53a0cc['shift']());}}}(_0x48f3,0x3a672));var __decorate=this&&this[_0x116f15(0xe5)]||function(_0x14520c,_0x1b1e08,_0x29df4e,_0x18f888){var _0x42793c=_0x116f15,_0x149357,_0x542b4b=arguments[_0x42793c(0x11a)],_0x221f99=_0x542b4b<0x3?_0x1b1e08:null===_0x18f888?_0x18f888=Object[_0x42793c(0xfb)](_0x1b1e08,_0x29df4e):_0x18f888;if(_0x42793c(0xe9)==typeof Reflect&&'function'==typeof Reflect[_0x42793c(0x119)])_0x221f99=Reflect[_0x42793c(0x119)](_0x14520c,_0x1b1e08,_0x29df4e,_0x18f888);else{for(var _0x3e56c7=_0x14520c[_0x42793c(0x11a)]-0x1;0x0<=_0x3e56c7;_0x3e56c7--)(_0x149357=_0x14520c[_0x3e56c7])&&(_0x221f99=(_0x542b4b<0x3?_0x149357(_0x221f99):0x3<_0x542b4b?_0x149357(_0x1b1e08,_0x29df4e,_0x221f99):_0x149357(_0x1b1e08,_0x29df4e))||_0x221f99);}return 0x3<_0x542b4b&&_0x221f99&&Object[_0x42793c(0x11b)](_0x1b1e08,_0x29df4e,_0x221f99),_0x221f99;},__metadata=this&&this['__metadata']||function(_0xcc8f6e,_0x35d877){var _0x3bdf60=_0x116f15;if(_0x3bdf60(0xe9)==typeof Reflect&&'function'==typeof Reflect[_0x3bdf60(0xee)])return Reflect[_0x3bdf60(0xee)](_0xcc8f6e,_0x35d877);},__param=this&&this['__param']||function(_0x1d3629,_0x43c4d0){return function(_0x184e8e,_0x520a74){_0x43c4d0(_0x184e8e,_0x520a74,_0x1d3629);};},__importDefault=this&&this[_0x116f15(0x107)]||function(_0x12b41e){var _0x505a58=_0x116f15;return _0x12b41e&&_0x12b41e[_0x505a58(0xe6)]?_0x12b41e:{'default':_0x12b41e};};function _0x48f3(){var _0xcd811a=['AuthService','metadata','JWT_REFRESH_EXPIRE_IN','findUserByToken','cookie','_id','Logout\x20success.','env','handleRefreshToken','createRefreshToken','Không\x20tồn\x20tại\x20refresh_token\x20ở\x20cookies.\x20Please\x20do\x20login\x20again.','validateUser','default','UserService','getOwnPropertyDescriptor','125QXywEo','@nestjs/jwt','Req','1032010kEqGty','2671760XCNxDZ','findByUsername','3726117YVFTEZ','clearCookie','fullName','1MZuSYO','design:paramtypes','__importDefault','Res','Hết\x20hạn\x20refresh_token.\x20Please\x20do\x20login\x20again.','Không\x20tồn\x20tại\x20refresh_token\x20ở\x20database.\x20Please\x20do\x20login\x20again.','28sYaESP','login','140106CygrqY','email','compareSync','jwtService','logout','Injectable','handleUserLogout','avatar','Thông\x20tin\x20đăng\x20nhập\x20không\x20chính\x20xác','hsWaI','258694FAJfvf','design:type','decorate','length','defineProperty','sub','JWT_REFRESH_SECRET','role','Gsplg','body','bcryptjs','sign','phone','BadRequestException','51772YOeLMr','updateUserToken','password','userService','JwtService','@nestjs/common','delay','__decorate','__esModule','277434PzcCon','verify','object','refresh_token','prototype','c21f969b5f03d33d43e04f8f136e7682.png'];_0x48f3=function(){return _0xcd811a;};return _0x48f3();}Object[_0x116f15(0x11b)](exports,_0x116f15(0xe6),{'value':!0x0}),exports[_0x116f15(0xed)]=void 0x0;const common_1=require(_0x116f15(0x12a)),user_service_1=require('../user/user.service'),jwt_1=require(_0x116f15(0xfd)),ms_1=__importDefault(require('ms')),bcrypt=(require('dotenv')['config'](),require(_0x116f15(0x121)));let AuthService=class{constructor(_0x4d8568,_0x2a2aec){var _0x5cff2f=_0x116f15;this[_0x5cff2f(0x128)]=_0x4d8568,this['jwtService']=_0x2a2aec;}async[_0x116f15(0xf8)](_0x4d6681,_0x4f32ca){var _0x29b519=_0x116f15;_0x4d6681=await this['userService'][_0x29b519(0x101)](_0x4d6681);if(_0x4d6681&&bcrypt[_0x29b519(0x10f)](_0x4f32ca,_0x4d6681[_0x29b519(0x127)]))return _0x4d6681['password']=void 0x0,_0x4d6681;throw new common_1[(_0x29b519(0x124))](_0x29b519(0x115));}async[_0x116f15(0x10c)](_0x473c45,_0x2b7562,_0x1636f2){var _0x1811ba=_0x116f15;const _0x214b6d={'email':_0x473c45[_0x1811ba(0x10e)],'phone':_0x473c45[_0x1811ba(0x123)],'fullName':_0x473c45[_0x1811ba(0x104)],'role':_0x473c45[_0x1811ba(0x11e)],'sub':_0x473c45[_0x1811ba(0xf2)],'avatar':_0x473c45&&_0x473c45[_0x1811ba(0x114)]?_0x473c45['avatar']:_0x1811ba(0xec)};var _0x5f36f8=this[_0x1811ba(0xf6)](_0x214b6d);return await this['userService']['updateUserToken'](_0x473c45[_0x1811ba(0xf2)],_0x5f36f8),_0x2b7562[_0x1811ba(0xf1)](_0x1811ba(0xea),_0x5f36f8,{'maxAge':(0x0,ms_1[_0x1811ba(0xf9)])(process[_0x1811ba(0xf4)][_0x1811ba(0xef)]),'httpOnly':!0x0}),null!=(_0x2b7562=null==_0x1636f2?void 0x0:_0x1636f2['body'])&&_0x2b7562[_0x1811ba(0x12b)]?new Promise((_0x17ebe5,_0x5b61ef)=>{var _0x145d52=_0x1811ba;if(_0x145d52(0x116)==='hsWaI'){var _0xd75858;setTimeout(()=>{var _0x231d52=_0x145d52;if('Gsplg'!==_0x231d52(0x11f))return _0x55c4b4&&_0x2cbdde[_0x231d52(0xe6)]?_0x544de6:{'default':_0x4beb5a};else _0x17ebe5({'access_token':this['jwtService'][_0x231d52(0x122)](_0x214b6d),'user':{'email':_0x473c45['email'],'phone':_0x473c45[_0x231d52(0x123)],'fullName':_0x473c45[_0x231d52(0x104)],'role':_0x473c45[_0x231d52(0x11e)],'avatar':_0x473c45[_0x231d52(0x114)],'id':_0x473c45[_0x231d52(0xf2)]}});},+(null==(_0xd75858=null==_0x1636f2?void 0x0:_0x1636f2[_0x145d52(0x120)])?void 0x0:_0xd75858[_0x145d52(0x12b)]));}else this[_0x145d52(0x128)]=_0x433c49,this['jwtService']=_0x56a56f;}):{'access_token':this[_0x1811ba(0x110)][_0x1811ba(0x122)](_0x214b6d),'user':{'email':_0x473c45[_0x1811ba(0x10e)],'phone':_0x473c45['phone'],'fullName':_0x473c45[_0x1811ba(0x104)],'role':_0x473c45['role'],'avatar':_0x473c45[_0x1811ba(0x114)],'id':_0x473c45[_0x1811ba(0xf2)]}};}[_0x116f15(0xf6)](_0x48181c){var _0x41b7f5=_0x116f15;return this[_0x41b7f5(0x110)][_0x41b7f5(0x122)](_0x48181c,{'secret':process['env'][_0x41b7f5(0x11d)],'expiresIn':process[_0x41b7f5(0xf4)][_0x41b7f5(0xef)]});}async['fetchAccount'](_0x5d5879){var {_id:_0x5d5879,phone:_0x1214f1,email:_0x1ab6e2,fullName:_0x405a11,role:_0xf1a997,avatar:_0x490251}=_0x5d5879;return{'user':{'id':_0x5d5879,'email':_0x1ab6e2,'phone':_0x1214f1,'fullName':_0x405a11,'role':_0xf1a997,'avatar':_0x490251}};}async[_0x116f15(0x111)](_0x4ba2c2,_0xc8a7f8){var _0x5282fe=_0x116f15;return _0xc8a7f8[_0x5282fe(0x103)]('refresh_token'),await this[_0x5282fe(0x128)][_0x5282fe(0x113)](_0x4ba2c2),_0x5282fe(0xf3);}async[_0x116f15(0xf5)](_0x167d02,_0x5aec02){var _0x4258b6=_0x116f15;if(null==(_0x4c3d56=_0x167d02['cookies'])||!_0x4c3d56[_0x4258b6(0xea)])throw new common_1[(_0x4258b6(0x124))](_0x4258b6(0xf7));const _0x4a5e47=_0x167d02['cookies']['refresh_token'];var _0x4c3d56=await this[_0x4258b6(0x128)][_0x4258b6(0xf0)](_0x4a5e47);if(!_0x4c3d56)throw new common_1['BadRequestException'](_0x4258b6(0x10a));try{var _0x238dcb=this['jwtService'][_0x4258b6(0xe8)](_0x4a5e47,{'secret':process['env'][_0x4258b6(0x11d)]});if(_0x238dcb){var _0xe338ec={'email':_0x238dcb['email'],'phone':_0x4c3d56[_0x4258b6(0x123)],'fullName':_0x4c3d56[_0x4258b6(0x104)],'role':_0x238dcb[_0x4258b6(0x11e)],'sub':_0x238dcb[_0x4258b6(0x11c)],'avatar':_0x4c3d56&&_0x4c3d56[_0x4258b6(0x114)]?_0x4c3d56['avatar']:_0x4258b6(0xec)};const _0x2f3d13=this[_0x4258b6(0xf6)](_0xe338ec);return await this[_0x4258b6(0x128)][_0x4258b6(0x126)](_0x238dcb[_0x4258b6(0x11c)],_0x2f3d13),_0x5aec02[_0x4258b6(0xf1)](_0x4258b6(0xea),_0x2f3d13,{'maxAge':(0x0,ms_1[_0x4258b6(0xf9)])(process[_0x4258b6(0xf4)][_0x4258b6(0xef)]),'httpOnly':!0x0}),{'access_token':this[_0x4258b6(0x110)][_0x4258b6(0x122)](_0xe338ec),'user':{'email':_0x238dcb[_0x4258b6(0x10e)],'phone':_0x238dcb[_0x4258b6(0x123)],'fullName':_0x238dcb[_0x4258b6(0x104)],'role':_0x238dcb[_0x4258b6(0x11e)],'avatar':_0x238dcb[_0x4258b6(0x114)],'id':_0x238dcb[_0x4258b6(0x11c)]}};}}catch(_0x4aa3ae){throw _0x5aec02[_0x4258b6(0x103)](_0x4258b6(0xea)),new common_1[(_0x4258b6(0x124))](_0x4258b6(0x109));}}};__decorate([__param(0x1,(0x0,common_1[_0x116f15(0x108)])({'passthrough':!0x0})),__param(0x2,(0x0,common_1[_0x116f15(0xfe)])()),__metadata(_0x116f15(0x118),Function),__metadata(_0x116f15(0x106),[Object,Object,Object]),__metadata('design:returntype',Promise)],AuthService[_0x116f15(0xeb)],_0x116f15(0x10c),null),__decorate([__param(0x1,(0x0,common_1['Res'])({'passthrough':!0x0})),__metadata(_0x116f15(0x118),Function),__metadata(_0x116f15(0x106),[String,Object]),__metadata('design:returntype',Promise)],AuthService[_0x116f15(0xeb)],_0x116f15(0x111),null),__decorate([__param(0x1,(0x0,common_1[_0x116f15(0x108)])({'passthrough':!0x0})),__metadata(_0x116f15(0x118),Function),__metadata(_0x116f15(0x106),[Object,Object]),__metadata('design:returntype',Promise)],AuthService['prototype'],_0x116f15(0xf5),null),AuthService=__decorate([(0x0,common_1[_0x116f15(0x112)])(),__metadata('design:paramtypes',[user_service_1[_0x116f15(0xfa)],jwt_1[_0x116f15(0x129)]])],AuthService),exports[_0x116f15(0xed)]=AuthService;