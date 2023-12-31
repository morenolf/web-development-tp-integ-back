const { validationResult } = require("express-validator");
const { ValidationError } = require("../../models/exceptions.js");
const ClothRepository = require("../../repositories/cloth_repository.js");

const Cloth = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            throw new ValidationError('Failed to validate cloth request');
        }

        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const type = req.params['type'];

        const count = await ClothRepository.CountCloth(type);
        const cloth = await ClothRepository.ClothByPaging(page, limit, type);

        if (count == 0) {
            totalPages = Math.ceil(0)
        } else {
            totalPages = Math.ceil(count / limit)
        }

        res.json({
            cloth,
            totalPages: totalPages,
            currentPage: page
          });
    } catch (error) {
        next(error)
    }
};

module.exports = { Cloth }