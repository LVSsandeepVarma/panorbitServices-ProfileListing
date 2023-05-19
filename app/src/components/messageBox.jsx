import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useSelector } from "react-redux";
import { selectedProfileForMessage } from "../features/profiles/profilesSlice";

export default function MessageBox() {
    const contactToBeCommunicated = useSelector(selectedProfileForMessage)
    return (
        <div style={{ position: "relative" }}>
            <MainContainer>
                <ChatContainer>
                    <MessageList>
                        <Message
                            model={{
                                message: "Hello my friend",
                                sentTime: "just now",
                                sender: contactToBeCommunicated?.name,
                            }}
                        />
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </div>
    )
}