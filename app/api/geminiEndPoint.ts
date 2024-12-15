// pages/api/some_endpoint.ts

import { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
  message: string;
  status: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  const { query } = req;
  const name = query.name || 'Guest';

  // You could add complex logic here, like interacting with a database or another API
  res.status(200).json({
    message: `Hello, ${name}! Welcome to your custom API.`,
    status: 'success',
  });
}

export default handler;
