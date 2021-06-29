// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const API_URL: string = 'http://www.colourlovers.com/api/palettes/new?format=json';

export async function getData(){
  const res = await fetch(API_URL, { method: 'GET', 
                                headers:{'Content-Type': 'application/json', 'User-Agent': '*'}})
  const response = await res.json();
  return response;
}

export default async function handler(req: any, res: any) {
  const data = await getData();
  res.status(200).json(data);
}
