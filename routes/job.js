import express from 'express';
import Job from '../Models/Job.Model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).send(jobs);
}
);

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const jobs = await Job.findById(id);
  res.status(200).json(jobs);
}
);

router.post('/', async (req, res) => {
  const job = await Job.create(req.body);
  res.status(200).json(job);
}
);

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(job);
}
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Job.findByIdAndDelete(id);
  res.status(200).json({ message: 'Job deleted successfully' });
}
);

export default router;
