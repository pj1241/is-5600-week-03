// Listen for server-sent events (SSE) and update the chat window
new window.EventSource("/sse").onmessage = function(event) {
  window.messages.innerHTML += `<p>${event.data}</p>`;
};

// Listen for the form submission event to send chat messages
window.form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Send the chat message via fetch and clear the input field
  window.fetch(`/chat?message=${window.input.value}`);
  window.input.value = '';
});
