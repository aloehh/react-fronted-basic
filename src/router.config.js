const routes = [
  {
    title: '简历管理',
    icon: 'file',
    path: '/resume',
  },
  {
    title: '用户管理',
    icon: 'user',
    path: '/user',
    childern: [
      {
        title: '用户列表',
        path: '/user/list',
      },
      {
        title: '添加用户',
        path: '/user/add',
      },
    ],
  },
  {
    title: '博客管理',
    icon: 'book',
    path: '/blog',
    childern: [
      {
        title: '博客列表',
        path: '/blog/list',
      },
      {
        title: '添加博客',
        path: '/blog/add',
      },
    ],
  },
]

export default routes
