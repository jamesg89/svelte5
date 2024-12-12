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
        label: 'Our Collection',
        link: '/our-collection'
    },
    {
        label: 'Meet The Locals',
        link: '/meet-the-locals'
    },
    {
        label: 'Buy Local',
        link: '/buy-local'
    },
    {
        label: 'Sell Local',
        link: '/sell-local'
    },
    {
        label: 'Contact',
        link: '/contact'
    }
];