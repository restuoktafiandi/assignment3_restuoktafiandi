const { Photo, User } = require("../models")

class PhotoController {
  static getAllPhotos(req, res) {
    Photo.findAll({
      attributes: { exclude: ['password'] },
      include: {
        model: User,
        attributes: { exclude: ['password'] } 
      } 
    })
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static getOnePhotoById(req, res) {
    let id = req.params.id

    Photo.findByPk(id)
      .then((result) => {
        if (!result) {
          return res.status(404).json({ message: "Photo not found" }); 
        }
        res.status(200).json(result)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static createPhoto(req, res) {
    const { title, caption, image_url } = req.body
    const user = res.locals.user

    Photo.create({ title, caption, image_url, UserId: user.id })
      .then((result) => {
        res.status(201).json(result)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static updateOnePhotoById(req, res) {
    let id = req.params.id
    const { title, caption, image_url } = req.body

    let data = {
      title,
      caption,
      image_url,
    }

    Photo.update(data, { where: { id }, returning: true })
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static deleteOnePhotoById(req, res) {
    let id = req.params.id
    Photo.destroy({ where: { id } })
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }
}

module.exports = PhotoController