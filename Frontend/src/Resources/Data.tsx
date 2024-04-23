import img1 from "../Resources/images/IconSetting.png"
import img2 from "../Resources/images/IconCommand.png"
import img3 from "../Resources/images/IconChat.png"
import img4 from "../Resources/images/IconBranding.png"

import img5 from "../Resources/images/IconAutoModeration.png"
import img7 from "../Resources/images/IconNotification.png"
import img8 from "../Resources/images/IconRoles.png"
import img9 from "../Resources/images/IconReactionRole.png"
import img10 from "../Resources/images/IconWelcomeMessage.png"
import img11 from "../Resources/images/IconLogging.png"

export const DataSidebar = [
        {
            name:"Status",
            img:img1,
            route:'/status'
        },
        {
            name:"Commands",
            img:img2,
            route:'/commands'
        },
        {
            name:"Channel Content",
            img:img3,
            route:'/Channel-content'
        },
        {
            name:"Custom Branding",
            img:img4,
            route:'/branding' 
        },
]

export const Modules = [
    {
        name:"Welcome Message",
        img:img10,
        route:'/welcome-message'
    },
    {
        name:"Leave Message",
        img:img10,
        route:'/leave-message'
    },
    {
        name:"Levels",
        img:img5,
        route:'/level-setup'
    },
    // {
    //     name:"Moderation",
    //     img:img6,
    //     route:'/moderation'
    // },
    {
        name:"Social Notifications",
        img:img7,
        route:'/notification'
    },
    {
        name:"Join Roles",
        img:img8,
        route:'/join-roles'
    },
    {
        name:"Reaction Roles",
        img:img9,
        route:'/reaction-roles'
    },
    {
        name:"Logging",
        img:img11,
        route:'/logging'
    }   


]

