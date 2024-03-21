"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Switch} from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    function switcherClicked() {
        theme == 'dark' ? setTheme('light') : setTheme('dark') 
    }

    if(!mounted) return null

    return (
        <div>
            <Switch
                size="lg"
                color="success"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
                isSelected={theme == 'dark' ? false : true}
                onChange={() => switcherClicked()}
            >
                {/* {switchstate ? 'Dark mode' : 'Light Mode' } */}
            </Switch>
            
        </div>
    )
};