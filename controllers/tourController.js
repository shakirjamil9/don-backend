const tourData = [
  {
    id: 1,
    name: 'Sample Tour1',
    city: 'Lahore',
  },
  {
    id: 2,
    name: 'Sample Tour2',
    city: 'Karachi',
  },
  {
    id: 3,
    name: 'Sample Tour3',
    city: 'Murree',
  },
];

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Name or Price is Missing',
    });
  }
  next();
};

exports.checkID = (req, res, next, val) => {
  // const tourId = tourData[tourData.length - 1].id;
  const tourId = tourData.at(-1).id;
  if (val > tourId) {
    res.status(404).json({
      status: 'fail',
      message: 'Tour not found',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: tourData,
  });
};

exports.createTour = (req, res) => {
  const id = tourData.at(-1).id + 1;
  const newTour = { id, ...req.body };
  tourData.push(newTour);
  res.status(201).json({
    status: 'success',
    data: newTour,
  });
};

exports.getSingleTour = (req, res) => {
  const { id } = req.params;
  const tour = tourData.find((el) => el.id == id);
  res.status(200).json(tour);
};

exports.updateTour = (req, res) => {
  const { id } = req.params;
  const tour = tourData.find((el) => el.id == id);

  res.status(202).json({
    status: 'success',
    message: 'Updated Successfully',
  });
};

exports.deleteTour = (req, res) => {
  const { id } = req.params;
  const tour = tourData.find((el) => el.id == id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
