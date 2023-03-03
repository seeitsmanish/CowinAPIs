const express = require('express');

const router = express.Router();
const {SearchController, AuthenticationController, UserController} = require('../../controllers/index');

// For Search Controller
router.get('/searchdistricts/:stateId', SearchController.getAllDistrictsByStateId);
router.get('/searchcentersbypincode/:pincode/:date',SearchController.getAllCetersByPincode);
router.get('/searchstates',SearchController.getAllStates);
router.get('/searchcentersbydistrict/:districtId/:date',SearchController.getAllCentersByDistrictIdAndDate);


// For Authentication Controller
router.post('/authentication/generateOTP', AuthenticationController.generateOTP);
router.post('/authentication/confirmOTP', AuthenticationController.confirmOTP);
router.get('/authentication/fetchcertificate/:beneficiary_reference_id', AuthenticationController.fetchVaccinationCertfication);



// For User Controller
router.post('/signup',UserController.create);
router.post('/signin', UserController.signIn);
router.get('/isauthenticated', UserController.isAuthenticated);
router.get('/isadmin', UserController.isAdmin);


module.exports = router;