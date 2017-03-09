//
//  AppDelegate.h
//  ReactOC
//
//  Created by admindyn on 2017/2/14.
//  Copyright © 2017年 admindyn. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreData/CoreData.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong) NSPersistentContainer *persistentContainer;

- (void)saveContext;


@end

