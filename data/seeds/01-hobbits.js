
exports.seed = function(knex) {
  // Deletes ALL existing entries and resets ids
  return knex('hobbits')
    .then(function() {
      return knex('hobbits').insert([
        { name: 'sam' },
        { name: 'frodo' },
        { name: 'pippin' },
        { name: 'merry' },
      ]);
    });
};