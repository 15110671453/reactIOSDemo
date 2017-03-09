//
//  ReactView.m
//  ReactOC
//
//  Created by admindyn on 2017/2/14.
//  Copyright © 2017年 admindyn. All rights reserved.
//

#import <React/React/Base/RCTRootView.h>
#import "ReactView.h"




@implementation ReactView

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

    
-(void)awakeFromNib
    {
        //注意使用真机测试React时 到真机的 无线局域网 感叹号  DHCP 查看它的动态从电脑获取的ip地址192.168.2.14
        //不是这个ip 应该是将动态获取 改为手动固定ip地址
        //类似抓包工具 http代理 代理服务器为 电脑的ip地址 端口号为 8081 与终端开启的开发npm服务器 的
        //Running packager on port 8081. 端口号一致
        //这里的路由 需要注意 避免cannot get 的问题
        //注意192.168.3.98的服务器根目录是就是工程目录
        //文档中的http://192.168.3.98:8081/index.ios.js在工程目录的根目录下 所以需要注意路径的映射要正确
        [super awakeFromNib];
//       NSString* urlStr =@"http://192.168.3.98:8081/ReactOC/ReactComponent/index.ios.bundle";
//        //这里原文件是index.ios.js这里连接却要写成index.ios.bundle
//        NSURL* jsLocation =[NSURL URLWithString:urlStr];
//        
//        RCTRootView* rootView =[[RCTRootView alloc]initWithBundleURL:jsLocation moduleName:@"ReactOC" initialProperties:nil launchOptions:nil];
//          rootView.frame = self.bounds;
//        [self addSubview:rootView];
      
    
    }
    
    
@end
