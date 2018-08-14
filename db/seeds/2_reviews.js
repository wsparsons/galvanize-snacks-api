exports.seed = function(knex, Promise) {
  // Inserts sample reviews
  return knex('reviews').insert([
    { id: 1, title: 'Wow!', text: 'These are delicous!', rating: 4, snack_id: 1 },
    { id: 2, title: 'Ew', text: 'These are *not* delicous!', rating: 1, snack_id: 1 },
    { id: 3, title: 'Tasty!', text: "So tasty. Yes, so tasty, you'll love them!", rating: 5, snack_id: 1 },
    { id: 4, title: 'Oh, lawdy lawd!', text: 'You heard me!', rating: 3, snack_id: 4 },
    { id: 5, title: 'Wow-za!', text: 'Emphasis on the -za?', rating: 5, snack_id: 5 },
    { id: 6, title: '*Snobby Voice*', text: 'I have certainly had sooooo much better.', rating: 1, snack_id: 6 },
    { id: 7, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 7 },
    { id: 8, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 8 },
    { id: 9, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 9 },
    { id: 10, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 10 },
    { id: 11, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 11 },
    { id: 12, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 12 },
    { id: 13, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 13 },
    { id: 14, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 14 },
    { id: 15, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 15 },
    { id: 16, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 16 },
    { id: 17, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 17 },
    { id: 18, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 18 },
    { id: 19, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 19 },
    { id: 20, title: 'Double wow!', text: 'These *are* delicous!', rating: 3, snack_id: 19 },
    { id: 21, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 21 },
    { id: 22, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 22 },
    { id: 23, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 23 },
    { id: 24, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 24 },
    { id: 25, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 25 },
    { id: 26, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 26 },
    { id: 27, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 27 },
    { id: 28, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 28 },
    { id: 29, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 29 },
    { id: 30, title: 'Wow!', text: 'These are delicous!', rating: 3, snack_id: 3 },
    { id: 31, title: '*Snobby Voice*', text: 'I have certainly had sooooo much better.', rating: 1, snack_id: 2 },
    { id: 32, title: "I can't have just one!", text: 'I love these! Not only are they yummy, but they give me that certain je ne sais quoi I need in the courage department to fight ghosts.', rating: 5, snack_id: 31 },
    { id: 33, title: 'Bad for business', text: 'My guards love these, but you try keeping the larder full when all of your Gamorians have the munchies!', rating: 1, snack_id: 31 },
    { id: 34, title: 'Biscotti Bliss!', text: 'Cookie! Me want cookie!', rating: 4, snack_id: 31 },
    { id: 35, title: 'The treat that travels well', text: "I like 'em, and they are great at sea; they don't even need to be salt-packed!", rating: 4, snack_id: 31 },
    { id: 36, title: 'Seriously? Yuck', text: 'I have certainly had sooooo much better.', rating: 1, snack_id: 31 },
    { id: 37, title: 'Solo! Solo! Too Nakma Noya Solo!', text: 'Han ma boo-kee, keelee ka-lya dooka. Wadja da boolya ra Moy. Han, Mah kee cheezay. Hassatamooma koh kee malyaloongee.', rating: 5, snack_id: 31 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));`)
  })
}