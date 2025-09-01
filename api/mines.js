import { storage } from '../../server/storage';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const mines = await storage.getAllMines();
      res.status(200).json(mines);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch mines' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
