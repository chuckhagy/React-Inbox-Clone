export default function recordToMessage(record) {
  return {
    id: record.id,
    subject: record.fields.subject,
    body: record.fields.body,
    starred: record.fields.starred,
    read: record.fields.read,
    labels: record.fields.labels
  };
}
