import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        if (socket) {
            socket.on("newMessage", (newMessage) => {
                // Your event handling logic here
            });
        }

        newMessage.shouldShake = true;
        const sound = new Audio(notificationSound);
        sound.play();
        setMessages([...messages, newMessage]);
    });

    return () => {
        if (socket) {
            socket.off("newMessage");
        }
    };

};
myFunction(socket, setMessages, messages);

;
export default useListenMessages;