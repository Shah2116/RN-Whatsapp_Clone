import CallList from "../screens/CallList";
import ChatList from "../screens/ChatList";
import StatusList from "../screens/StatusList";

export const TabBarData = [
    {
        id: 1,
        name: 'Chats',
        route: ChatList,
    },
    {
        id: 2,
        route: StatusList,
        name: 'Status',
        
    },
    {
        id: 3,
        name: 'Calls',
        route: CallList,
    }
]