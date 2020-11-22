const express = require('express');
const activityRoute = express.Router();

let Activity = require('../models/activity');

activityRoute.route('/').get((req,res) => {
	Activity.find((err,data) => {
		if(err) {
			return next(err)
		} else {
			res.json(data)
		}
	});
});

activityRoute.route('/create-activity').post((req,res,next) => {
	Activity.create(req.body, (err,data) => {
		if(err) {
			return next(err);
		} else {
			res.json(data);
		}
	});
});

activityRoute.route('/edit-activity/:id').get((req,res) => {
	Activity.findById(req.params.id, (err,data) => {
		if(err) {
			return next(err);
		} else {
			res.json(data);
		}
	});
});

activityRoute.route('/update-activity/:id').put((req, res, next) => {
  Activity.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log('Activity successfully updated!');
    }
  }); 


});

activityRoute.route('/delete-activity/:id').delete((req,res,next) => {
	Activity.findByIdAndRemove(req.params.id, (err,data) => {
		if(err) {
			return next(err);
		} else {
			res.status(200).json({
				msg: data
			});
		}
	});
});

module.exports = activityRoute;