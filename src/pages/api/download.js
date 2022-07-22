export default function handler(req, res) {
  res.setHeader("Content-Disposition", "attachment; filename=sample.html");
  res.setHeader('Content-Type', 'text/html');
  res.status(200).end("<!DOCTYPE html><html><body>hello world</body></html>");
}