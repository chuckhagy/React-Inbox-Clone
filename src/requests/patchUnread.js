export default function patchAllUnread(messageId){
  console.log('this is the message id', messageId)
  return fetch(`https://api.airtable.com/v0/appWMrYGmkWVykHeR/messages/${messageId}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer keyguaiAIUYZl6jYN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        read: false
      }
    })
  })
   .then(response => response.json())
   .then(record => {
     console.log(record)
  return {
      id: record.id,
      body: record.fields.body || '',
      subject: record.fields.subject || '',
      read: record.fields.read || '',
      starred: record.fields.starred || '',
      labels: record.fields.length > 1 ? record.fields.labels.join(',') : []
   };
  })
}
