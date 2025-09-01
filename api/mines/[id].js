import { storage } from '../../server/storage';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const mine = await storage.getMineById(id);
      if (!mine) {
        return res.status(404).json({ message: 'Mine not found' });
      }
      res.status(200).json(mine);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch mine' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
