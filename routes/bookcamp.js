const express = require ('express');
const router = express.Router ();

router.get ('/', (req, res) => {
  res.status (200).json ({
    success: true,
    data: null,
    message: 'get all bookcamp successfully',
  });
});

router.get ('/:id', (req, res) => {
  res.status (200).json ({
    success: true,
    data: null,
    message: `get bookcamp successfully ${req.params.id}`,
  });
});

router.post ('/', (req, res) => {
  res.status (200).json ({
    success: true,
    data: null,
    message: 'Create bookcamp successfully',
  });
});

router.put ('/:id', (req, res) => {
  res.status (200).json ({
    success: true,
    data: null,
    message: `update bookcamp successfully ${req.params.id}`,
  });
});

router.delete ('/:id', (req, res) => {
  res.status (200).json ({
    success: true,
    data: null,
    message: `delete bookcamp successfully ${req.params.id}`,
  });
});

module.exports = router;
