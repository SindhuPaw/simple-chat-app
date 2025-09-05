// === ELEMEN-ELEMEN PENTING DARI HTML ===

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');


// === EVENT LISTENER FORM ===

messageForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const messageText = messageInput.value.trim();

    if (messageText === '') {
        return;
    }

    createMessageBubble(messageText, 'sent');
    
    messageInput.value = '';

    sendBotResponse();
});


// === FUNGSI UNTUK MENAMPILKAN PESAN DI LAYAR ===

// Parameter 'type' adalah jenisnya 'sent' atau 'received'.
function createMessageBubble(text, type) {
    
    const bubble = document.createElement('div');

    bubble.classList.add('chat-bubble', type);

    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = text; 

    const timestamp = document.createElement('p');
    timestamp.classList.add('timestamp');
    timestamp.textContent = new Date().toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    bubble.appendChild(messageParagraph);
    bubble.appendChild(timestamp);
    messageContainer.appendChild(bubble);

    messageContainer.scrollTop = messageContainer.scrollHeight;
}


// === FUNGSI BALASAN DARI BOT ===

function sendBotResponse() {
    const replies = [
        "Terima kasih",
        "Menarik!",
        "Saya lihat Anda menggunakan Vanilla JS.",
        "Semoga berhasil di acara UniTalk with Qiscus!"
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    setTimeout(function() {
        createMessageBubble(randomReply, 'received');
    }, 1500); // 1500 milidetik = 1.5 detik
}