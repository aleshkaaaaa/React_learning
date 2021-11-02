import React from "react";

export const MessageList = ({messages}) => (
    <div>
        {messages.map((mes) => (
            <div>
                <span>{mes.author}</span>: <span>{mes.text}</span>
            </div>
        ))}
    </div>
);
