export default [
  {
    title: "Dashboard",
    to: { name: "dashboard" },
    icon: { icon: "tabler-dashboard" },
    roles: ["admin"],
  },
  {
    title: "Branches",
    icon: { icon: "tabler-building-store" },
    children: [
      {
        title: "Branches",
        to: { name: "branches" },
        roles: ["admin"],
      },
      {
        title: "Service Cost",
        to: { name: "service-cost" },
        roles: ["admin"],
      },
    ],
    roles: ["admin"],
  },
  {
    title: "Areas",
    to: { name: "areas" },
    icon: { icon: "tabler-building-community" },
    roles: ["admin"],
  },
  {
    title: "All Orders",
    to: { name: "orders" },
    icon: { icon: "tabler-package" },
    roles: ["admin", "agent", "restaurant", "operation", "logistic"],
  },
  {
    title: "My Orders",
    to: { name: "my-orders" },
    icon: { icon: "tabler-package" },
    roles: ["agent"],
  },
  {
    title: "Products",
    to: { name: "products" },
    icon: { icon: "tabler-baguette" },
    // children: [
    //   {
    //     title: "Products",
    //     to: { name: "products" },
    //     icon: { icon: "tabler-baguette" },
    //     roles: ["admin", "markter"],
    //   },
    //   {
    //     title: 'Extra And Flavors',
    //     to: { name: "extra-flavors" },
    //     icon: { icon: "tabler-baguette" },
    //     roles: ["admin"],
    //   },
    // ],
    roles: ["admin", "markter"],
  },
  {
    title: "Categories",
    to: { name: "categories" },
    icon: { icon: "tabler-bookmark" },
    roles: ["admin", "restaurant", "markter"],
  },
  {
    title: "Deliveries",
    to: { name: "deliveries" },
    icon: { icon: "tabler-truck-delivery" },
    roles: ["admin", "restaurant", "logistic"],
  },
  {
    title: "Employees",
    to: { name: "employees" },
    icon: { icon: "tabler-user-star" },
    roles: ["admin"],
  },
  {
    title: "Users",
    to: { name: "users" },
    icon: { icon: "tabler-users" },
    roles: ["admin"],
  },
  {
    title: "Agents",
    to: { name: "agents" },
    icon: { icon: "tabler-user-check" },
    roles: ["admin"],
  },
  {
    title: "Marketers",
    to: { name: "marketers" },
    icon: { icon: "tabler-user-edit" },
    roles: ["admin"],
  },
  {
    title: "Operations",
    to: { name: "operations" },
    icon: { icon: "tabler-user-code" },
    roles: ["admin"],
  },
  {
    title: "Logistics",
    to: { name: "logistics" },
    icon: { icon: "tabler-user-share" },
    roles: ["admin"],
  },
  {
    title: "Finances",
    to: { name: "finances" },
    icon: { icon: "tabler-user-dollar" },
    roles: ["admin"],
  },
  {
    title: "Banners",
    to: { name: "banners" },
    icon: { icon: "tabler-photo" },
    roles: ["admin", "markter"],
  },
  {
    title: "Vouchers",
    to: { name: "vouchers" },
    icon: { icon: "tabler-gift" },
    roles: ["admin", "markter"],
  },
  {
    title: 'Reporting',
    icon: { icon: 'tabler-chart-histogram' },
    roles: ["admin", "restaurant", "operation", "finance", "logistic", "agent"],
    children: [
      {
        title: "Customize Reports",
        to: { name: "customize-report" },
        roles: ["admin", "operation", "finance", "logistic", "agent"],
      },
      {
        title: "Branches & Areas",
        to: { name: "branches-areas-report" },
        roles: ["admin", "restaurant", "operation", "finance", "logistic", "agent"],
      },
      {
        title: "Sales Rate",
        to: { name: "sales-rate-report" },
        roles: ["admin", "restaurant", "agent"],
      },
      {
        title: "Statistics Analysis",
        to: { name: "statistics-analysis-report" },
        roles: ["admin"],
      }
    ]
  },
];
