export default function messageToRecord(message) {
  const record = { fields: {} };
  if (message.id) record.id = message.id;
  if (message.subject) record.fields.subject = message.subject;
  if (message.body) record.fields.body = message.body;
  if (message.starred) record.fields.starred = message.starred;
  if (message.read) record.fields.read = message.read;
  if (message.labels) record.fields.labels = message.labels;
  return record;
}
