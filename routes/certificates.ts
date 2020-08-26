import express from 'express';
import CertificatesService from '../services/certificates';

const certificatesApi = (app: express.Application) => {
  const router = express.Router();

  app.use('/api/certificates', router);

  const certificatesService = new CertificatesService();

  router.get('/', async (_req, res, next) => {
    try {
      const certificates = await certificatesService.getCertificates();

      res.status(200).json({
        data: certificates,
        message: 'certificates listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:certificateId', async (req, res, next) => {
    const { certificateId } = req.params;

    try {
      const certificate = await certificatesService.getCertificate({
        certificateId,
      });

      res.status(200).json({
        data: certificate,
        message: 'certificate retrieved',
      });
    } catch (error) {
      next(error);
    }
  });
};

export default certificatesApi;
