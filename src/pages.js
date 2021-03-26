const db = require('./database/database');


module.exports = {
  index(req, res) {
    return res.render('index');
  },

  async findDog(req, res) {
    try {
      const animals = await db.query('select * from animals order by created_at desc');
      return res.render('find-dog', { animals });
    } catch (error) {
      console.log(error);
    }
  },

  registerDog(req, res) {
    return res.render('register-dog');
  },

  async saveDog(req, res) {
    const {
      name,
      img,
      sex,
      species,
      state,
      city,
      port,
      telephone,
      description,
    } = req.body;
    try {
      const animal = await db.query({
        text:
          'INSERT INTO animals (name, img, sex, species, state, city, port, telephone, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);',
        values: [
          name,
          img,
          sex,
          species,
          state,
          city,
          port,
          telephone,
          description,
        ],
      });
      console.log('Dados inseridos com sucesso!');

      return res.redirect('/');
    } catch (error) {
      console.log(error);
      return res.send('Erro no banco de dados!');
    }
  },

  async removeDog(req, res) {
    const { id } = req.params;
    try {
      await db.query(`DELETE FROM animals WHERE id = ${id};`);
      res.send('Pet removido com sucesso!');
    } catch (error) {
      console.log(error);
    }
  },

  async dog(req, res) {
    const { id } = req.params;
    const animal = await db.query(
      `SELECT * FROM animals WHERE id = ${id};`
    );
    return res.render('dog', { animal });
  },

  async getEditDog(req, res) {
    try {
      const { id } = req.params;
      const animal = await db.query(
        `SELECT * FROM animals WHERE id = ${id};`
      );
      return res.render('edit-dog', { animal });
    } catch (error) {
      console.log(error);
    }
  },

  async editDog(req, res) {
    try {
      const { id } = req.params;
      const { name, sex, species, port, telephone, description } = req.body;
      const animal = await db.query({
        text:
          'UPDATE animals SET name = $1, sex = $2, species =$3, port = $4, telephone = $5, description =$6 WHERE id = $7;',
        values: [name, sex, species, port, telephone, description, id],
      });

      console.log('Dados alterados com sucesso!');
      return res.redirect('/find-dog');
    } catch (error) {
      console.log(error);
    }
  },
};
