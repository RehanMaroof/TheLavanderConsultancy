import Callback from "@/Models/Callback";
import Preps from "@/Models/Preps";

export default function handler(req, res) {
  res.status(200).json({ message: 'Database removed. Static response.' });
}
