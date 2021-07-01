// Add logged in Transactions find one 

// app.post('/users/:id', async (req, res) => {
//     const { id } = req.params
//     const { artworkId, userId, currentCity } = req.body
//     try {
//       let resolvedArtworkCollection
//       if (currentCity = "Karlstad") {
//         const resolvedArtwork = await ArtWorkKarlstad.findById(artworkId)
//         resolvedArtworkCollection = await User.findByIdAndUpdate(id, {
//           $push: { 
//             resolvedKarlstad: resolvedArtwork
//             }
//         }, { new: true })
        
//       } else {
//         const resolvedArtwork = await ArtWorkUppsala.findById(artworkId)
//         resolvedArtworkCollection = await User.findByIdAndUpdate(userId, {
//           $push: { 
//             resolvedUppsala: resolvedArtwork
//             }
//         }, { new: true })
//       }
//       res.json({ success: true, resolvedArtworkCollection })
//     } catch (err) {
//       res.status(400).json({ success: false, message: 'Kunde inte hitta användare', error: err })
//     }
//   })

// const userId = "60ce516c481f2f112584e8a1";
// const userLogged = await User.findOne({userId});
// console.log(userLogged.data);