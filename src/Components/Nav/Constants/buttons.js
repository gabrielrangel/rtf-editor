import {
    faBold, faItalic, faUnderline,
    faListOl, faListUl, faAlignCenter, faAlignJustify,
    faAlignLeft, faAlignRight, faLink
} from '@fortawesome/free-solid-svg-icons'

export const buttons = [
    [
        {icon: faBold, tagName: 'strong'},
        {icon: faItalic, tagName: 'i'},
        {icon: faUnderline, tagName: 'u'}
    ],

    [
        {icon: faListUl},
        {icon: faListOl},
    ],

    [
        {icon: faLink}
    ],

    [
        {icon: faAlignRight},
        {icon: faAlignCenter},
        {icon: faAlignLeft},
        {icon: faAlignJustify}
    ],

]