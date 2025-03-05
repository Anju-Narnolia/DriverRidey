import React, { useState, useEffect } from "react";
import { db, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "./Firebase";

export default function ChatBox({ user }) {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("timestamp"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        // Send a welcome message to the user when they join
        const sendWelcomeMessage = async () => {
            await addDoc(collection(db, "messages"), {
                name: "Admin",
                email: user.email,
                text: `Hello ${user.name}, how can I help you?`,
                timestamp: serverTimestamp(),
            });
        };
        sendWelcomeMessage();
    }, [user]);

    const sendMessage = async () => {
        if (message.trim()) {
            await addDoc(collection(db, "messages"), {
                name: user.name,
                email: user.email,
                text: message,
                timestamp: serverTimestamp(),
            });
            setMessage("");
        }
    };

    return (
        <div className="chat-box">
            <div className="messages">
                {messages
                    .filter(msg => msg.email === user.email || msg.name === "Admin") // Show only user and admin messages
                    .map(msg => (
                        <p key={msg.id}><strong>{msg.name}:</strong> {msg.text}</p>
                    ))}
            </div>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}
