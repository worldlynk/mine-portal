import { storage } from '../../server/storage';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const inquiries = await storage.getAllInquiries();
      res.status(200).json(inquiries);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch inquiries' });
    }
  } else if (req.method === 'POST') {
    try {
      const inquiry = await storage.createInquiry(req.body);
      res.status(201).json(inquiry);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create inquiry' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
