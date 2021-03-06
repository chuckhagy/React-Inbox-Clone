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
    labels: record.fields.labels ? record.fields.labels.split(',') : [],
    date: record.fields.date
  })))
  .catch(error => alert('System Error: Please Try Again Later'))
}