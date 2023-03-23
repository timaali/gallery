var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://GalleryApp:galleryapp@cluster0.ox2elsq.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://GalleryApp:galleryapp@cluster0.ox2elsq.mongodb.net/?retryWrites=true&w=majority',
    test: 'ongodb+srv://GalleryApp:galleryapp@cluster0.ox2elsq.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
