export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: 'ADMINDASHELEMENT',
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: 'CREATADMINDASH',
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: 'CREATESTUDENTDASH',
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: 'CREATEFACULTYDASH',
      },
    ],
  },
];

// const adminDashboardItems = adminPaths.reduce((acc, item) => {
//   if (item.name && item.path) {
//     acc.push({
//       key: item.name,
//       label: `<NavLink >{item.name}</NavLink>`,
//     });
//   }

//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: `<NavLink >${child.name}</NavLink>`,
//       })),
//     });
//   }

//   return acc;
// }, []);

// console.log(adminDashboardItems);

// const adminRoutes = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) =>
//       acc.push({
//         path: child.path,
//         element: child.element,
//       })
//     );
//   }

//   return acc;
// }, []);

// console.log(adminRoutes);
