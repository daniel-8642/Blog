### 在Win上使用GoLand开发

GoLand版本需要具有WSL 支持（支持使用wsl上的Go SDK）目前我使用的GoLand(222) 2022.2.2 支持

创建项目时GOROOT需要选择在 \\\\wsl& 子目录中的Go SDK

建议将项目存放在wsl内，依据前面的教程下载好项目并打开后

需要在运行、调试配置中指定软件包目录为项目内部入口位置

如默认软件包路径：cynking.com/goweb，fish_web项目需要改为cynking.com/goweb/cmd/fish_web

工作目录改为target内：\\wsl$\Ubuntu\home\admin\go\src\cynking.com\goweb\target\fish_web

除了在系统环境变量内配置HOSTID之外，这里填写环境也能达到样的效果。环境：HOSTID=4

程序实参按照makefile内的参数填写这里样例仅作参考

软件包路径：

```
cynking.com/goweb/cmd/fish_web
```

工作目录：

```
\\wsl$\Ubuntu\home\admin\go\src\cynking.com\goweb\target\fish_web
```

环境：

```
HOSTID=4
```

程序实参：

```shell
-configfile config/config.yaml
-env local
-game 11
-port 8880
-httpport 8880
-name web服务
-version 1.0.0
```

需要注意的是，目前goland对wsl的支持还在实验阶段，会有一些bug。

比如在一些项目使用按钮关闭程序，仅面板退出程序不会真正关闭。可以输入ctrl+c可以正常关闭。

这样，goland就可以正常在wsl上编译，执行公司的go项目了。

enjoy
