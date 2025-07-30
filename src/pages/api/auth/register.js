import User from "@/Models/User";

export default function handler(req, res) {
  res.status(200).json({ message: 'Database removed. Static response.' });
}
