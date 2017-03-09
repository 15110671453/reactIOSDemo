//
//  AppSettingManager.m
//  ReactOC
//
//  Created by admindyn on 2017/2/15.
//  Copyright © 2017年 admindyn. All rights reserved.
//

#import "AppSettingManager.h"
static AppSettingManager* settingManager=nil;
@implementation AppSettingManager
+(instancetype)settingManager
{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        
    });
    return settingManager;
}
@end
