import React from 'react';
import ChatBot from 'react-chatbotify';

interface Settings {
  isOpen: boolean;
  general: {
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
  };
  chatHistory: {
    storageKey: string;
  };
}

const WorthySkinChatBot: React.FC = () => {

    const flow = {
        start: {
          message: "Welcome to our food delivery service! How can I assist you today?",
          path: "question1",
        },
        question1: {
          message: "What type of food are you in the mood for today? (e.g., pizza, burgers, sushi)",
          path: "question2",
        },
        question2: {
          message: "Great choice! Do you have a specific restaurant in mind, or would you like suggestions?",
          path: "question3",
        },
        question3: {
          message: "Perfect! Could you let us know your delivery address?",
          path: "question4",
        },
        question4: {
          message: "Thanks! Would you like to add any special instructions for your order?",
          path: "question5",
        },
        question5: {
          message: "Awesome! Are you ready to place your order, or would you like to explore more options?",
          path: "end",
        },
        end: {
          message: "Thank you for ordering! Your food will be delivered shortly. Have a great meal!",
          chatDisabled: true,
          path: "restart",
        },
        restart: {
          message: "Welcome to our food delivery service! How can I assist you today?",
          path: "question1",
        },
      };

    const settings: Settings = {
        isOpen: true,
        general: {
          primaryColor: '#e99662',
          secondaryColor: '#e99662',
          fontFamily: 'Arial, sans-serif',
        },
        chatHistory: {
          storageKey: "worthy_skin_chat_history",
        },
      };

  return (
    <ChatBot settings={settings} flow={flow} />
  );
}

export default WorthySkinChatBot;