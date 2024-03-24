import { headers } from "next/headers";

export const getDeviceType = () => {
    const headersList = headers()
    const userAgent = headersList.get('user-agent')

    return userAgent!.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    ? 'mobile'
    : 'desktop'
}