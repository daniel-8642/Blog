export default {
    title: 'VitePress',
    description: 'Just playing around.',
    themeConfig: {
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: '简介', link: '/' },
                ]
            },
            {
                text: 'docker',
                items: [
                    { text: '容器简介', link: '/docker实验计划/index' },
                    { text: '实验一: 环境准备', link: '/docker实验计划/实验一' },
                    { text: '实验二: 构建镜像并且上传', link: '/docker实验计划/实验二' },
                    { text: '实验三: 打通容器的文件系统', link: '/docker实验计划/实验三' },
                    { text: '实验四: 让容器轻松互联', link: '/docker实验计划/实验四' },
                ]
            }
        ]
    }
}
