const FoldersService = {
  // when this object is imported into app.js the (knex) parameter will have the argument req.app.get('db') passed in which is grabbing the 'db' value out of the app object which is encapsulated with the knex instance (db connection) created in server.js 
  getAllFolders(knex) {
    return knex
      .select('*')
      .from('folders');
  },
  insertFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('folders')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex
      .from('folders')
      .select('*')
      .where('id', id)
      .first();
  },
  deleteFolder(knex, id) {
    return knex
      .from('folders')
      .where({ id })
      .delete();
  },
  updateFolder(knex, id, folderUpdates) {
    return knex
      .from('folders')
      .where({ id })
      .update(folderUpdates);
  }
};

module.exports = FoldersService;