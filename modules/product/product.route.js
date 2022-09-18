import { Router } from "express";

const router=Router();

import {getProduct,getById,addProduct,deleteProduct,updateProduct} from './controllerProducts/product.controller.js'

router.get('/product',getProduct);
router.get('/product/:id',getById)
router.post('/product',addProduct)

router.delete('/product/:id',deleteProduct)


router.put('/product/:id',updateProduct)
export default router;