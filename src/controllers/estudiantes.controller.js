const { Estudiantes } = require('../models/estudiantes.model');


// Remove the router creation from controller
const getAllEstudiantes = (req, res) => {
    Estudiantes.getAllEstudiantes((err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.send({ users: results });
    });
};

const getEstudianteById = (req, res) => {
    let id = req.params.id;
    
    Estudiantes.getEstudianteById(id, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar estudiante por ID:', err);
            return res.status(404).send({ message: `No se encontró estudiante con ID ${id}` });
        }
        res.send(result[0]);
    });
};

const createEstudiante = (req, res) => {
    const nuevoEstudiante = req.body;
    Estudiantes.createEstudiante(nuevoEstudiante, (err, result) => {
        if (err) {
            console.error('Error al crear estudiante:', err);
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Estudiante creado', id: result.insertId });
    }
)}

const updateEstudiante = (req, res) => {
    const estudiante = req.body;
    console.log(req.body);
    Estudiantes.updateEstudiante(estudiante, (err, result) => {
        if (err) {
            console.error('Error al actualizar estudiante:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Estudiante actualizado' });
    })
}


 
module.exports = {
    getAllEstudiantes,
    getEstudianteById,
    createEstudiante,
    updateEstudiante
};




//codigo asincronico
// const getAllEstudiantes = async (req, res) => {
//     try{
//         const resultados =
//             await new Promise((resolve,reject)=>
//                 Estudiantes.getAllEstudiantes((err,result)=>{
//                     if(err)
//                         reject(err)
//                     else 
//                         resolve(result)
//                 })
//             );
//         res.send({ users: resultados });
        
//     } catch(err){
//        console.error('Error al ejecutar la consulta:', err);
//        res.status(500).send(err); 
//      }
//   };
  
//   const getEstudianteById = async (req,res)=>{
//      try{
//          let id=req.params.id;
//          let encontrado= await new Promise((resolve,reject)=>
//              Estudiantes.getEstudianteById(id,(err,result)=>{
//                  if(err || !result[0])
//                      reject(new Error(`No se encontró un resultado`))
//                  else 
//                      resolve(result[0])
//              })
//          );
         
//          res.send(encontrado)
  
//      }catch(error){
//         console.error('Error al buscar por ID:', error.message);
//         if(error.message.includes('No se encontró un resultado'))
//            return res.status(404).send({message:`No se encontró un resultado con ID ${id}`})
        
//         res.status(500).send({message:error.message})
//      }
  
//   }
  
//   const createEstudiante=async(req,res)=>{
//      try{
//          let nuevo=req.body;
         
//          // Corregir campo notas_adicionales ya que no está incluido en la query original.
//          delete nuevo.notas_adicionales;
  
//          let result= await new Promise((resolve,reject) =>
//              Estudiantes.createEstudiante(nuevo, (err, resultInsert)=>{
//                 if(err)
//                     reject(err)
//                  else 
//                      resolve(resultInsert)
//             })
//         );
//         res.status(201).send({ message:'Creado correctamente', id:result.insertId })
  
//     }catch(error){
//         console.error('Error al crear:', error.message);
//         return res.status(500).send({ message:error.message });
//     }

// }