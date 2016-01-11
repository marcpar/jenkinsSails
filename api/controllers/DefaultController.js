/**
 * DefaultController
 *
 * @description :: Server-side logic for managing Defaults
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: function(req, res){
		return res.json({todo: 'testing '})
	}
};

