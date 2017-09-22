export default function createMessage(newMessage){
  return fetch(`https://api.airtable.com/v0/appWMrYGmkWVykHeR/messages/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer keyguaiAIUYZl6jYN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        subject: newMessage.subject,
        read: newMessage.read,
        starred: newMessage.starred,
        labels: newMessage.labels.join(','),
        body: newMessage.body
      }
    })
  })
   .then(response => response.json())
   .then(record => {
  return {
      id: record.id,
   };
  })
  .catch(error => alert('System Error: Please Try Again Later'))
}
