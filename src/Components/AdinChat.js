import React, { useState, useEffect } from "react";
import { db, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "./Firebase";

export default function AdminChat() {
    const [messages, setMessages] = useState([]);
    const [reply, setReply] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("timestamp"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, []);

    const sendReply = async () => {
        if (reply.trim() && selectedUser) {
            await addDoc(collection(db, "messages"), {
                name: "Admin",
                email: selectedUser,
                text: reply,
                timestamp: serverTimestamp(),
            });
            setReply("");
        }
    };
    return (
        <div className="admin-chat">
            <h2>Admin Chat</h2>
            <div className="users">
                {Array.from(new Set(messages.map(msg => msg.email))).map(email => (
                    <button key={email} onClick={() => setSelectedUser(email)}>
                        {email}
                    </button>
                ))}
            </div>
            <div className="messages">
                {messages
                    .filter(msg => msg.email === selectedUser)
                    .map(msg => (
                        <p key={msg.id}><strong>{msg.name}:</strong> {msg.text}</p>
                    ))}
            </div>
            {selectedUser && (
                <div>
                    <input 
                        type="text" 
                        value={reply} 
                        onChange={(e) => setReply(e.target.value)} 
                        placeholder="Type a reply..."
                    />
                    <button onClick={sendReply}>Send Reply</button>
                </div>
            )}
        </div>
    );
}
