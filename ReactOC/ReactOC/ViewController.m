//
//  ViewController.m
//  ReactOC
//
//  Created by admindyn on 2017/2/14.
//  Copyright © 2017年 admindyn. All rights reserved.
//

#import "ReactView.h"
#import <React/React/Base/RCTRootView.h>
#import "ViewController.h"

@interface ViewController ()


    
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    //jsCodeLocation定义一个新的react组件的本地或者远程URL地址
    //模块的名称 在index.ios.js文件中通过AppRegistry注册的名称
    
//    NSURL* jsCodeLocation = [[NSBundle mainBundle]URLForResource:@"main" withExtension:@"ios.bundle"];
     NSString* urlStr =@"http://192.168.3.98:8081/ReactOC/ReactComponent/firstview.ios.bundle";
    NSURL* jsCodeLocation=[NSURL URLWithString:urlStr];
    //如果路径正确 jsCodeLocation 就有值file:///var/containers/Bundle/Application/DA8F94DB-01F3-4A1C-9A4F-318C3B6FD90F/ReactOC.app/main.ios.js
    //否则 为null 获取不到文件的路径
    //但是发现 react native 只认后缀名是.bundle的文件
    //否则语法错误  经测试最好不要使用nsbundle在react使用中 使用字符串 初始化url路径吧
    RCTRootView* rootView =[[RCTRootView alloc]initWithBundleURL:jsCodeLocation moduleName:@"ReactOC" initialProperties:@{@"key1":@"我爱你北京",@"key2":@"我爱你山西"} launchOptions:self.launchOptions];
    CGRect viewRect = self.view.bounds;
    rootView.frame = CGRectMake(0, 0, viewRect.size.width, viewRect.size.height);
    
//    rootView.backgroundColor=[UIColor redColor];
    [self.view addSubview:rootView];
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
