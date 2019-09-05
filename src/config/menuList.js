const menuList = [
    {
        title: '首页',
        key: '/'
    },
    {
        title: '服务',
        key: '/server',
        limit:'server',
    },
    {
        title: '图标',
        key: '/charts',
        limit:'charts',
        children: [
            {
                title: '柱形图',
                key: '/charts/bar',
            },
            {
                title: '饼图',
                key: '/charts/pie',
            },
            {
                title: '折线图',
                key: '/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        key: '/permission'
    },
];
export default menuList;
