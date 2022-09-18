import { Router } from "express";
const router=Router();

import {getAllUsers,addUser,updateUser,signIn} from './controller/user.controller.js'

router.get('/getAllUsers',getAllUsers);

router.post('/addUser',addUser)

router.patch('/updateUser/:id',updateUser)

router.post('/signin',signIn)

export default router;