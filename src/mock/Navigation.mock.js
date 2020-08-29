import React from "react";
import {STRINGS} from "../shared/values/strings";
import HomeIcon from '@material-ui/icons/Home';

export const NavigationMock = [
    {
        id: 1,
        title: STRINGS.navigation.dashboard,
        link: '/home',
        icon: <HomeIcon />
    },
    {
        id: 2,
        title: STRINGS.navigation.members,
        link: '/members',
        icon: <HomeIcon />,
        children: [
            {
                id: 1,
                title: STRINGS.navigation.membersOrder,
                link: '/members/order',
                icon: <HomeIcon />
            },
            {
                id: 2,
                title: STRINGS.navigation.membersInformation,
                link: '/members/information',
                icon: <HomeIcon />
            },
        ]
    },
    {
        id: 3,
        title: STRINGS.navigation.products,
        link: '/product',
        icon: <HomeIcon />
    },
]