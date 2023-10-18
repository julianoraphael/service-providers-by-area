import { Request, Response } from 'express';
import ServiceArea from '../models/serviceArea.model';
import Provider from '../models/provider.model';

export const createServiceArea = async (req: Request, res: Response) => {
  const { providerName, areaName, price, geojson } = req.body;

  // Verificar se o provedor existe pelo nome
  const providerByName = await Provider.findOne({ name: providerName });

  // Verificar se o provedor foi encontrado pelo nome ou pelo ID
  const provider = providerByName ;

  if (!provider) {
    return res.status(404).json({ error: 'Provider not found' });
  }

  // Provedor encontrado, continuar com a criação da área de serviço
  const serviceArea = new ServiceArea({
    providerName: provider.name, // Use o nome do provedor encontrado
    areaName,
    price,
    geojson,
  });

  try {
    const result = await serviceArea.save();
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating service area:', error);
    res.status(500).json({ error: 'Error creating service area' });
  }
};


export const getServiceAreasByLatLng = async (req: Request, res: Response) => {
    const lat = req.query.lat?.toString();
    const lng = req.query.lng?.toString();
  
    try {
      if (!lat || !lng) {
        return res.status(400).json({ error: 'Parâmetros lat e lng são obrigatórios.' });
      }
  
      const point = {
        type: 'Point',
        coordinates: [parseFloat(lng), parseFloat(lat)]
      };
  
      const areas = await ServiceArea.find({
        geojson: {
          $geoWithin: {
            $centerSphere: [point.coordinates, 100 / 6371] // Raio de 100 km em radianos (6371 é o raio da Terra em km)
          }
        }
      });
  
      res.status(200).json(areas);
    } catch (error) {
      console.error('Erro ao recuperar áreas de serviço:', error);
      res.status(500).json({ error: 'Erro ao recuperar áreas de serviço.' });
    }
  };
  
