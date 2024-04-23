import { atom} from "recoil";
import { ChannelListArray, Guild, Roles, User, userData} from "../Interface";

export const toggleState = atom({
    key: "toggleState",
    default: false,
})
export const ModerationPath = atom({
    key:"ModerationPath",
    default:" "
})
export const NotifPopup = atom({
    key:"NotifPopup",
    default:false
})

export const UserData =atom<userData>({
    key:"UserData",
    default:{
        user:{} as User,
        guilds:[] as Guild[]
    } 
})
export const loading = atom({
    key:"loading",
    default:true
})
export const ChannelId = atom({
    key:"ChannelIt",
    default:""
})

export const ChannelArray = atom<ChannelListArray[]>({
    key:"ChannelArrayInterface",
    default: [] as ChannelListArray[]
})
export const RoleArray = atom<Roles[]>({
    key:'roles',
    default:[] as Roles[]
})