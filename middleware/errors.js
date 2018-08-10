function processErrorMessage(err) {
    if (err.message) {
      switch (err.message) {
        case 'notFound': return { status: 404, message: 'The item requested is not found' }
                  
        default:
          return { status: 500, message: 'An internal server error has occurred.' }
      }
    }
  }
  
  
  module.exports = processErrorMessage
  