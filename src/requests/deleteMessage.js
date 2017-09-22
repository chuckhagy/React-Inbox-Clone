export default function deleteMessage(messageId){
  return fetch(`https://api.airtable.com/v0/appWMrYGmkWVykHeR/messages/${messageId}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer keyguaiAIUYZl6jYN',
      'Content-Type': 'application/json'
    },
  })
   .then(response => response.json())
   .then(record => {
     
      return {
          id: record.id,
       };
  })
  .catch(error => alert('System Error: Please Try Again Later'))
}
