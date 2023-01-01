import{FC, useEffect,useRef,useState} from 'react';

import './styles.css';

interface ImenuItem{
    name : string,
    icon : string,
    items: string[]
}
const menuItems =[
    {
        name : "Home"
    },
    {
        name:"Calculator",
        items : [
            "Cube","Exp","ETC"
        ]
    }
]