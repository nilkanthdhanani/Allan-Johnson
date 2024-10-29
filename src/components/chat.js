import React, { useState } from 'react';
import { chat, closeWhite } from '../assets/images/images';

export default function Chat({ isHidden }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChatBox = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className={`${isHidden ? 'hidden' : ''} /* your existing classes */`}>
        <div className="fixed bottom-0 right-0 z-50 font-roboto">
          {!isChatOpen && (
            <div
              className="px-[35px] mr-[30px] py-[15px] bg-black flex items-center gap-[15px] cursor-pointer max-sm:p-[15px] max-sm:rounded-[50%] max-sm:mb-[10px] max-sm:mr-[20px] "
              onClick={toggleChatBox}>
              <img src={chat} alt="chat" className="w-[25px]" />
              <span className="text-white text-[20px] max-sm:hidden">Let's Chat!</span>
            </div>
          )}

          {isChatOpen && (
            <div className="w-[400px] h-[70vh] max-h-[600px] mr-[30px] bg-white shadow-md grid grid-rows-[70px_1fr_80px] max-sm:w-[calc(100vw-60px)] max-sm:mr-[20px] max-sm:grid-rows-[auto_1fr_auto]">
              <div className="p-[20px] bg-black flex justify-between items-center max-sm:p-[10px] ">
                <h3 className="text-[20px] text-white font-normal max-sm:text-[16px] ">Let's Chat!</h3>
                <img className='w-[17px] cursor-pointer' src={closeWhite} alt="closeWhite" onClick={toggleChatBox} />
              </div>
              <div className="h-full overflow-auto p-[20px] flex flex-col items-end">
                {messages.map((msg, index) => (
                  <div key={index} className="mb-2 py-[10px] px-[20px] break-all bg-green text-white rounded-md text-[16px] max-sm:p-[10px] ">
                    {msg}
                  </div>
                ))}
              </div>
              <div className="p-[20px] flex items-center border-t-[1px] border-gray-300 max-sm:p-[10px] ">
                <input
                  type="text"
                  value={message}
                  placeholder="Type your message..."
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-2 text-[18px] font-light border-none focus:outline-none max-sm:text-[14px] max-sm:px-[10px] max-sm:p-0 " />
                <button
                  onClick={handleSend}
                  className="px-5 py-2 bg-black font-roboto font-light text-white rounded-md border-[1px] border-transparent hover:bg-white hover:text-black hover:border-black transition-all duration-300">
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div >
    </>
  );
}
