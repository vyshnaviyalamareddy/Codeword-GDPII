/**
 * @author Vyshnavi Yalamareddy <S531383@nwmissouri.edu>
 */
//This is coursestudent model
var mongoose = require('mongoose');
var validator = require('validator');
var mongoosePaginate = require('mongoose-paginate');
var CourseStudentModel = mongoose.model('CourseStudentModel', {
    CourseNameKey: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
   },
   EmailKey: {
    type: String,
    required: true,
    trim: true,
    minlength:4,
    validate:{
        validator: (value) =>{
            return validator.isEmail(value);
        }
    }
   },
   StudentName:{
    type: String,
    require: true,
   },
   Codeword:{
    type: String,
    require: true,
    minlength: 2
   },
   Acknowledged: {
    type: Boolean,
    require: true,
    default: false
   },
   courseCreater: {
    type: String,
    require: true
   }
});

module.exports.CourseStudentModel = CourseStudentModel