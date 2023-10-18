import { Request, Response } from 'express';
import Provider from '../models/provider.model';

export const createProvider = async (req: Request, res: Response) => {
  try {
    const providerData = req.body;
    const provider = new Provider(providerData);
    await provider.save();
    res.status(201).json(provider);
  } catch (error) {
    console.error('Erro ao inserir o provedor:', error);
    res.status(500).json({ error: 'Erro ao inserir o provedor.' });
  }
};
