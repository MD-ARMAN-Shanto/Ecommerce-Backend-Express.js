/* ***Node js Ecommerce Site
 *** category model creation
 *** Md. Arman Shanto
 *** Date: 10.12.2020 */

const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true
    }
  }, { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
