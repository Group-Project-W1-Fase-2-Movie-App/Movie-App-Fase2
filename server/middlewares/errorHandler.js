function errHandler(err, req, res, next) {
  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    let arrMessageErrors = err.arrErrors.map(el => {
      return el.message
    })

    res.status(400).json({
      status: err.code,
      name: err.name,
      details: arrMessageErrors
    })
  } else if (err.code === 401) {
    res.status(err.code).json({message: err.msg})
  } else if (err.code === 404) {
    res.status(err.code).json({message: err.msg})
  } else {
    res.status(err.code).json({message: err.msg, isHandled: false})
  }
  
}


module.exports = errHandler