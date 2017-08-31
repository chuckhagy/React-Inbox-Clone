export default function getMessages(){
  return fetch("https://api.airtable.com/v0/appWMrYGmkWVykHeR/messages", {
    headers:{
      Authorization: "Bearer keyguaiAIUYZl6jYN",
    }
  })
  .then(response => response.json())
  .then(data => data.records.map(record => ({
    id: record.id,
    body: record.fields.body,
    subject: record.fields.subject,
    read: record.fields.read,
    starred: record.fields.starred,
    labels: record.fields.labels ? record.fields.labels.split(',') : []
  })))
}


// fetch('https://api.airtable.com/v0/appPk1HVdzDYbmVDo/messages/recEGYBKQZ0bbON6y', {
//   method: 'PATCH',
//   headers: {
//     Authorization: 'Bearer key4mkZO85kXzSSmm',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     fields: {
//       read: true
//     }
//   })
// })
//  .then(response => response.json())
//  .then(record => {
//   console.log(record);
// return {
//     id: record.id,
//     body: record.fields.body,
//     subject: record.fields.subject,
//     read: record.fields.read,
//     starred: record.fields.starred,
//     labels: record.fields.labels.split(',')
//  };
// })
// .then(message => {
//   console.log(message);
// });
