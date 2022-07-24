const Material = require('../models/Material');

const addMaterial = async (req, res) => {
  try {
    const newMaterial = new Material(req.body);
    await newMaterial.save();
    res.status(200).send({
      message: 'Material Added Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllMaterials = async (req, res) => {
  try {
    await Material.deleteMany();
    await Material.insertMany(req.body);
    
    res.status(200).send({
      message: 'Material Added successfully!',
      
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingMaterials = async (req, res) => {
  try {
    const Materials = await Material.find({ status: 'Show' }).sort({ _id: -1 });
    res.send(Materials);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getDiscountedMaterials = async (req, res) => {
  try {
    const Materials = await Material.find({ discount: { $gt: 5 } }).sort({
      _id: -1,
    });
    res.send(Materials);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllMaterials = async (req, res) => {
  try {
    const Materials = await Material.find({}).sort({ _id: -1 });
    res.send(Materials);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getStockOutMaterials = async (req, res) => {
  try {
    const Materials = await Material.find({ quantity: { $lt: 1 } }).sort({
      _id: -1,
    });

    res.send(Materials);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getMaterialBySlug = async (req, res) => {
  try {
    const Materials = await Material.findOne({ slug: req.params.slug });
    res.send(Materials);
  } catch (err) {
    res.status(500).send({
      message: `Slug problem, ${err.message}`,
    });
  }
};

const getMaterialById = async (req, res) => {
  
  try {
    const Material = await Material.findById(req.params.id);
    console.log(Material,req.params.id)
    res.send(Material);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateMaterial = async (req, res) => {
  try {
    const Materials = await Material.findById(req.params.id);
    if (Materials) {
      Materials.material = req.body.material;
      Materials.materialName = req.body.materialName;
      Materials.materialType = req.body.materialType;
      Materials.supplier = req.body.supplier;
      Materials.producer = req.body.producer;
      Materials.quantity = req.body.quantity;
      Materials.price = req.body.price;
      await Materials.save();
      res.send({ data: Materials, message: 'Material updated successfully!' });
    }
    // handleMaterialStock(Material);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const updateStatus = (req, res) => {
  const newStatus = req.body.status;
  Material.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: newStatus,
      },
    },
    (err) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.status(200).send({
          message: `Material ${newStatus} Successfully!`,
        });
      }
    }
  );
};

const deleteMaterial = (req, res) => {
  Material.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: 'Material Deleted Successfully!',
      });
    }
  });
};

module.exports = {
  addMaterial,
  addAllMaterials,
  getAllMaterials,
  getShowingMaterials,
  getDiscountedMaterials,
  getStockOutMaterials,
  getMaterialById,
  getMaterialBySlug,
  updateMaterial,
  updateStatus,
  deleteMaterial,
};
