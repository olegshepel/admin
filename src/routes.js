export const routes = [
  {
    path: '/',
    breadcrumbName: 'Home',
  },
  {
    path: 'products',
    breadcrumbName: 'Products',
  },
  {
    path: 'procurement',
    breadcrumbName: 'Procurement',
    children: [
      {
        path: '/inquires',
        breadcrumbName: 'Inquires',
      },
      {
        path: '/agreements',
        breadcrumbName: 'Agreements',
      },
    ],
  },
  {
    path: 'documents',
    breadcrumbName: 'Documents',
  },
];
