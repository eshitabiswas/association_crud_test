const countryController = require('../controllers/countryController');
const stateController = require('../controllers/stateController');
const cityController = require('../controllers/cityController');
const Joi = require('joi');

const routes = [
    {
        method: 'POST',
        path: '/api/country/add',
        handler: countryController.saveCountry,
        // config: {
        //     description: 'Get a list of all countries',
        //     tags: ['api', 'country-add'],
        //     validate: {},
        //     // response: {
        //     //     schema: Joi.array().items(countrySchema), // Define your country schema here
        //     // },
        // },
    },
    {
        method: 'GET',
        path: '/api/country/list',
        handler: countryController.allCountryList,
    },
    {
        method: 'POST',
        path: '/api/state/add',
        handler: stateController.savestate,
    },
    {
        method: 'GET',
        path: '/api/state/list',
        handler: stateController.allStateList,
    },
    {
        method: 'GET',
        path: '/api/state/list/by/country/{country_id}',
        handler: stateController.stateListByCountry,
        options: {
            validate: {
                params: Joi.object({
                    country_id: Joi.number().integer().required(),
                }),
            }
        }
    },
    {
        method: 'POST',
        path: '/api/city/add',
        handler: cityController.saveCity,
    },
    {
        method: 'GET',
        path: '/api/city/list',
        handler: cityController.allCityList,
    },
    {
        method: 'GET',
        path: '/api/city/list/by/state/{state_id}',
        handler: cityController.cityListByState,
        options: {
            validate: {
                params: Joi.object({
                    state_id: Joi.number().integer().required(),
                }),
            }
        }
    },
    {
        method: 'PUT',
        path: '/api/country/update/{id}',
        handler: countryController.updateCountry,
    },
    {
        method: 'DELETE',
        path: '/api/country/delete/{id}',
        handler: countryController.deleteCountry,
    },
    {
        method: 'PUT',
        path: '/api/state/update/{id}',
        handler: stateController.updateState,
    },
    {
        method: 'DELETE',
        path: '/api/state/delete/{id}',
        handler: stateController.deleteState,
    },
    {
        method: 'PUT',
        path: '/api/city/update/{id}',
        handler: cityController.updateCity,
    },
    {
        method: 'DELETE',
        path: '/api/city/delete/{id}',
        handler: cityController.deleteCity,
    },
];

module.exports = routes;




