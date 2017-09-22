export default async function updateMessage(messageId, type, labels = [], label){
  let diffProp;
  switch(type){
    case "unstar":
      diffProp = {starred: false};
      break;
    case "star":
      diffProp = {starred: true};
      break;
    case "read":
      diffProp = {read: true}
      break;
    case "unread":
      diffProp = {read: false};
      break;
    case "addLabel":
      diffProp = {labels: labels + ',' + label}
      break;
    case "removeLabel":
      diffProp = {labels: labels.join(',')}
      break;
    default:
      break;
  }
  return fetch(`https://api.airtable.com/v0/appWMrYGmkWVykHeR/messages/${messageId}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer keyguaiAIUYZl6jYN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: diffProp
    })
  })
.then(response => response.json())
   .then(record => {
  return {
      id: record.id,
      body: record.fields.body || '',
      subject: record.fields.subject || '',
      read: record.fields.read || '',
      starred: record.fields.starred || '',
      labels: record.fields.length > 1 ? record.fields.labels.join(',') : []
   };
  })
  .catch(error => alert('System Error: Please Try Again Later'))
}
