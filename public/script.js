// Predefined Q&A database
const qaDatabase = {
    // Greetings
    "hello": "Hello! I'm your AI Assistant. How can I help you today?",
    "hi": "Hi there! What can I do for you?",
    "hey": "Hey! I'm here to help. What would you like to know?",
    "good morning": "Good morning! I hope you're having a great day. How can I assist you?",
    "good afternoon": "Good afternoon! What can I help you with today?",
    "good evening": "Good evening! How may I assist you?",
    
    // About the bot
    "what can you do": "I can answer questions, provide information, help with various topics, and have conversations with you. I'm designed to be helpful and informative!",
    "tell me about yourself": "I'm an AI Assistant created to help answer questions and provide information. I can discuss various topics and try to be as helpful as possible!",
    "who are you": "I'm your AI Assistant - a helpful chatbot designed to answer questions and provide assistance on various topics.",
    "what are you": "I'm an artificial intelligence assistant designed to help answer questions and provide information in a conversational way.",
    
    // AI and Technology
    "what is ai": "AI (Artificial Intelligence) is the simulation of human intelligence in machines that are programmed to think and learn like humans. It includes machine learning, natural language processing, and more!",
    "what is machine learning": "Machine Learning is a subset of AI that enables computers to learn and improve from experience without being explicitly programmed. It uses algorithms to find patterns in data.",
    "what is programming": "Programming is the process of creating instructions for computers to follow. It involves writing code using programming languages like Python, JavaScript, Java, and many others.",
    
    // General Knowledge
    "what is the weather": "I don't have access to real-time weather data, but I recommend checking a weather app or website for current conditions in your area!",
    "what time is it": "I don't have access to real-time information, but you can check the time on your device or ask your system's virtual assistant.",
    "how are you": "I'm doing great, thank you for asking! I'm here and ready to help with any questions you might have.",
    
    // Help and Support
    "help": "I'm here to help! You can ask me questions about various topics, and I'll do my best to provide helpful answers. What would you like to know?",
    "how does this work": "Simply type your question in the input field below and press Enter or click the send button. I'll try to provide a helpful response based on my knowledge!",
    "can you help me": "Of course! I'm here to help. What do you need assistance with?",
    
    // Fun and Creative
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything! 😄",
    "another joke": "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
    "tell me something interesting": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
    
    // Goodbyes
    "goodbye": "Goodbye! It was nice chatting with you. Come back anytime if you have more questions!",
    "bye": "Bye! Have a great day and feel free to return if you need any help!",
    "see you later": "See you later! I'll be here whenever you need assistance.",
    "thank you": "You're very welcome! I'm glad I could help. Is there anything else you'd like to know?",
    "thanks": "You're welcome! Happy to help anytime.",
    
    // Default responses for unmatched queries
    "default": [
        "I'm not sure about that, but I'm always learning! Could you try rephrasing your question?",
        "That's an interesting question! I don't have that information right now, but feel free to ask me something else.",
        "I don't have an answer for that at the moment. Is there something else I can help you with?",
        "I'm still learning about that topic. Could you ask me something else I might be able to help with?",
        "I'm not quite sure how to respond to that. Would you like to try asking something different?"
    ],
    // YouTube Video Creation Project
    "youtube video creation": `Here is a step-by-step guide for creating a YouTube video using AI tools:<br><br>
    <b>1. Script Writing</b><br>
    &nbsp;&nbsp;- Add-on: Magic Writing<br>
    &nbsp;&nbsp;- <a href="https://adobesparkpost.app.link/TR9Mb7TXFLb?addOnId=w3hjhkm16" target="_blank">Write a script for a 5-min AI video</a><br>
    &nbsp;&nbsp;- Prompt: Write a script for a 5-min AI video<br><br>
    <b>2. Thumbnail Design</b><br>
    &nbsp;&nbsp;- Add-on: YouTube Thumbnail Template<br>
    &nbsp;&nbsp;- <a href="https://new.express.adobe.com/new?width=1280&height=720&unit=px&taskID=youtube-thumbnail&templateTaskId=youtube-thumbnail..." target="_blank">Design a thumbnail with neon heading</a><br>
    &nbsp;&nbsp;- Prompt: Design a thumbnail with neon heading<br><br>
    <b>3. Voice-over</b><br>
    &nbsp;&nbsp;- Add-on: WellSaid Voiceover<br>
    &nbsp;&nbsp;- <a href="https://adobesparkpost.app.link/TR9Mb7TXFLb?addOnId=wk2mlg1m4" target="_blank">Generate an enthusiastic male/female voiceover</a><br>
    &nbsp;&nbsp;- Prompt: Generate an enthusiastic male/female voiceover<br><br>
    <b>4. Background Music</b><br>
    &nbsp;&nbsp;- Add-on: Soundstripe Music<br>
    &nbsp;&nbsp;- <a href="https://adobesparkpost.app.link/TR9Mb7TXFLb?addOnId=w627122mg" target="_blank">Search calm cinematic royalty-free music</a><br>
    &nbsp;&nbsp;- Prompt: Search calm cinematic royalty-free music<br><br>
    Let me know if you want more details on any step!`,
    // Instagram carousel for a product launch
    "instagram carousel for a product launch": `Here is a step-by-step guide for creating an Instagram carousel for a product launch using AI tools:<br><br>
    <b>1. Carousel Template Design</b><br>
    &nbsp;&nbsp;- Add-on: Product Launch Carousel Templates<br>
    &nbsp;&nbsp;- Task: Choose a carousel layout that fits your brand<br>
    &nbsp;&nbsp;- Prompt: Load product launch carousel layout<br><br>
    <b>2. Product Description Copywriting</b><br>
    &nbsp;&nbsp;- Add-on: Magic Writing<br>
    &nbsp;&nbsp;- Task: Write short, catchy descriptions for each slide<br>
    &nbsp;&nbsp;- Prompt: Write engaging product copy for 5-slide carousel<br><br>
    <b>3. Image Enhancement</b><br>
    &nbsp;&nbsp;- Add-on: AI Image Enhancer<br>
    &nbsp;&nbsp;- Task: Improve clarity and brightness of product images<br>
    &nbsp;&nbsp;- Prompt: Enhance product image for Instagram display<br><br>
    <b>4. Call-to-Action Slide</b><br>
    &nbsp;&nbsp;- Add-on: CTA Slide Builder<br>
    &nbsp;&nbsp;- Task: Design the final slide with your promo or CTA<br>
    &nbsp;&nbsp;- Prompt: Create final slide with “Shop Now” call-to-action<br><br>
    <b>5. Hashtag Generator</b><br>
    &nbsp;&nbsp;- Add-on: SocialHashtag AI<br>
    &nbsp;&nbsp;- Task: Generate relevant hashtags for reach<br>
    &nbsp;&nbsp;- Prompt: Generate hashtags for product launch in tech niche<br><br>
    Let me know if you want more details on any step!`,

    // Resume for a graphic designer
    "resume for a graphic designer": `Here is a step-by-step guide for creating a professional graphic designer resume using AI tools:<br><br>
    <b>1. Resume Template Selection</b><br>
    &nbsp;&nbsp;- Add-on: Modern Resume Templates<br>
    &nbsp;&nbsp;- Task: Choose a creative, clean resume layout<br>
    &nbsp;&nbsp;- Prompt: Load modern resume template for a designer<br><br>
    <b>2. Professional Bio Writing</b><br>
    &nbsp;&nbsp;- Add-on: Magic Writing<br>
    &nbsp;&nbsp;- Task: Generate a brief summary/bio section<br>
    &nbsp;&nbsp;- Prompt: Write a 2–3 sentence professional summary for a graphic designer<br><br>
    <b>3. Skills & Tools Section</b><br>
    &nbsp;&nbsp;- Add-on: SkillSet Designer<br>
    &nbsp;&nbsp;- Task: Display software and creative skills visually<br>
    &nbsp;&nbsp;- Prompt: Add icons and descriptions for Adobe Creative Suite, Figma, Canva, etc.<br><br>
    <b>4. Portfolio Section Integration</b><br>
    &nbsp;&nbsp;- Add-on: Portfolio Snippet Embedder<br>
    &nbsp;&nbsp;- Task: Showcase 2–3 sample projects visually<br>
    &nbsp;&nbsp;- Prompt: Embed design previews from Behance or Dribbble<br><br>
    <b>5. Export for Web & Print</b><br>
    &nbsp;&nbsp;- Add-on: Smart Export Tools<br>
    &nbsp;&nbsp;- Task: Prepare optimized versions for job portals and direct sharing<br>
    &nbsp;&nbsp;- Prompt: Export for web and high-resolution PDF<br><br>
    Let me know if you want more details on any step!`,

    // Poster for a college event
    "poster for a college event": `Here is a step-by-step guide for creating a college event poster using AI tools:<br><br>
    <b>1. Poster Template Selection</b><br>
    &nbsp;&nbsp;- Add-on: Event Poster Templates<br>
    &nbsp;&nbsp;- Task: Choose a layout suitable for campus events<br>
    &nbsp;&nbsp;- Prompt: Load poster layout for university event<br><br>
    <b>2. Event Details Writing</b><br>
    &nbsp;&nbsp;- Add-on: Magic Writing<br>
    &nbsp;&nbsp;- Task: Write a clear and engaging event description<br>
    &nbsp;&nbsp;- Prompt: Write a catchy text for an open mic night at college<br><br>
    <b>3. Visual Theme and Icons</b><br>
    &nbsp;&nbsp;- Add-on: IconFinder Express<br>
    &nbsp;&nbsp;- Task: Add icons or illustrations related to the event (e.g., music, microphone)<br>
    &nbsp;&nbsp;- Prompt: Add music and stage icons to the design<br><br>
    <b>4. Date & Location Styling</b><br>
    &nbsp;&nbsp;- Add-on: Typography Booster<br>
    &nbsp;&nbsp;- Task: Highlight important info like time and venue<br>
    &nbsp;&nbsp;- Prompt: Emphasize “Friday, 7 PM @ Student Union Hall”<br><br>
    <b>5. QR Code or Registration Link</b><br>
    &nbsp;&nbsp;- Add-on: QR Code Generator<br>
    &nbsp;&nbsp;- Task: Add scannable RSVP or ticket link<br>
    &nbsp;&nbsp;- Prompt: Generate QR code for event registration form<br><br>
    Let me know if you want more details on any step!`,

    // Presentation on AI for school
    "presentation on ai for school": `Here is a step-by-step guide for creating a school presentation on AI using Adobe Express Add-ons:<br><br>
    <b>1. Presentation Slide Template</b><br>
    &nbsp;&nbsp;- Add-on: AI & Tech Slide Decks<br>
    &nbsp;&nbsp;- Task: Choose a modern slide design template<br>
    &nbsp;&nbsp;- Prompt: Load a 10-slide tech-themed presentation template<br><br>
    <b>2. Content Outline Generation</b><br>
    &nbsp;&nbsp;- Add-on: Magic Writing<br>
    &nbsp;&nbsp;- Task: Get a basic outline for a school-level AI presentation<br>
    &nbsp;&nbsp;- Prompt: Create a simple presentation outline on “What is Artificial Intelligence?”<br><br>
    <b>3. Slide-by-Slide Content Writing</b><br>
    &nbsp;&nbsp;- Add-on: SlideText Generator<br>
    &nbsp;&nbsp;- Task: Generate short descriptions for each slide<br>
    &nbsp;&nbsp;- Prompt: Write content for slides on AI history, uses, pros/cons, and future<br><br>
    <b>4. Visual Elements and Icons</b><br>
    &nbsp;&nbsp;- Add-on: AI Illustrations Pack<br>
    &nbsp;&nbsp;- Task: Add images and icons related to robots, data, and automation<br>
    &nbsp;&nbsp;- Prompt: Add an illustration of a robot learning from data<br><br>
    <b>5. Speech or Notes Section</b><br>
    &nbsp;&nbsp;- Add-on: Speaker Notes Assistant<br>
    &nbsp;&nbsp;- Task: Add speaker notes for student to present with confidence<br>
    &nbsp;&nbsp;- Prompt: Add simple speech notes for each slide<br><br>
    Let me know if you want more details on any step!`,
};

// Get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Find the best matching response
function findResponse(input) {
    const normalizedInput = input.toLowerCase().trim();
    
    // Direct match
    if (qaDatabase[normalizedInput]) {
        return qaDatabase[normalizedInput];
    }
    
    // Partial match
    for (const [key, value] of Object.entries(qaDatabase)) {
        if (key !== 'default' && (normalizedInput.includes(key) || key.includes(normalizedInput))) {
            return value;
        }
    }
    
    // Return random default response
    const defaultResponses = qaDatabase.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Add message to chat
function addMessage(content, isUser = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const avatar = isUser ? '👤' : '🤖';
    const time = getCurrentTime();
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <p>${content}</p>
            <span class="message-time">${time}</span>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    typingIndicator.style.display = 'flex';
    
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    typingIndicator.style.display = 'none';
}

// Send message function
function sendMessage(message) {
    const input = document.getElementById('userInput');
    const messageText = message || input.value.trim();
    
    if (!messageText) return;
    
    // Add user message
    addMessage(messageText, true);
    
    // Clear input
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate thinking time
    setTimeout(() => {
        hideTypingIndicator();
        
        // Get response
        const response = findResponse(messageText);
        
        // Add bot response
        addMessage(response);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Handle send message
function handleSendMessage() {
    sendMessage();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    
    // Enter key listener
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
    
    // Send button listener
    sendBtn.addEventListener('click', handleSendMessage);
    
    // Focus input on load
    input.focus();
    
    // Auto-resize chat container
    function resizeChat() {
        const container = document.querySelector('.container');
        const header = document.querySelector('.header');
        const inputContainer = document.querySelector('.input-container');
        const suggestions = document.querySelector('.suggestions');
        const chatContainer = document.querySelector('.chat-container');
        
        const availableHeight = window.innerHeight - 40; // Account for padding
        const usedHeight = header.offsetHeight + inputContainer.offsetHeight + suggestions.offsetHeight;
        const chatHeight = Math.min(500, availableHeight - usedHeight - 100);
        
        chatContainer.style.height = chatHeight + 'px';
    }
    
    window.addEventListener('resize', resizeChat);
    resizeChat();
});

// Add some personality with random greetings
const greetings = [
    "Welcome! I'm excited to chat with you today! 🎉",
    "Hello there! Ready to explore some interesting conversations? ✨",
    "Hi! I'm here and ready to help with whatever you need! 🚀",
    "Greetings! Let's have a great conversation together! 💫"
];

// Occasionally show a random greeting (Easter egg)
setInterval(() => {
    if (Math.random() < 0.1) { // 10% chance every 30 seconds
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        console.log("🤖 " + randomGreeting);
    }
}, 30000);

window.sendMessage = sendMessage;
window.handleSendMessage = handleSendMessage;