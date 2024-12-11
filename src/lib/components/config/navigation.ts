interface NavItem {
    label: string;
    link: string;
}

export const navigation: NavItem[] = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'About',
        link: '/about'
    },
    {
        label: 'Services',
        link: '/services'
    },
    {
        label: 'Contact',
        link: '/contact'
    }
];