import MenuItemRenderer from "../Drawer/renderers/MenuItem"

const viewsDefs = [
    {
        route: 'Home',
        label: 'Home',
        // icon: 'home',
        drawer: MenuItemRenderer,
    },
    {
        route: 'AddCustomers',
        label: 'Add Customers',
        drawer: MenuItemRenderer,
    },
    {
        route: 'AddMembers',
        label: 'Add Members',
        drawer: MenuItemRenderer,
    },
    {
        route: 'SalesEntry',
        label: 'Sales Entry',
        drawer: MenuItemRenderer,
    },
    {
        route: 'MyProfile',
        label: 'My Profile',
        drawer: MenuItemRenderer,
    },
    {
        route: 'logout',
        event: 'logOut',
        label: 'Log out',
        // icon: 'home',
        drawer: MenuItemRenderer,
    },
    
]

export const drawerDefs = viewsDefs.map((def) => {
    const { drawer: renderer, ...rest } = def
    return {
      ...rest,
      renderer,
    }
})