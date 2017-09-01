export default function patchAllUnread(messageId, labels = [], label){
  return fetch(`https://api.airtable.com/v0/appWMrYGmkWVykHeR/messages/${messageId}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer keyguaiAIUYZl6jYN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        labels: labels + ',' + label
      }
    })
  })
   .then(response => response.json())
   .then(record => {
     console.log("hey")
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
