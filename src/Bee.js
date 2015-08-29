var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// add comment
// add another comment here
// and another
// adding another comment
