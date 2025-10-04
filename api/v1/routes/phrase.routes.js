const { Router } = require('express');
const router = Router();
const phraseController = require('../../../controllers/phraseController');

router.get('/', phraseController.getAllPhrases);
router.get('/:id', phraseController.getPhrase);
router.post('/', phraseController.createPhrase);
router.put('/:id', phraseController.updatePhrase);
router.delete('/:id', phraseController.deletePhrase);

module.exports = router;