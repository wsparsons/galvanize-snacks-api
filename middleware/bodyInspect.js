// function consumes ({body}, "snack"||"review", "create"||"update"(to check if "every" or only "some" of the fields are needed...))
	// const fields = [ 'name', 'description', 'img' ].every(field => !!field)
    // fields.some(field => !!field)

async function reviewBodyInspect(body, action) {
    console.log('body inspect')
    if (action === "create") {
        // all fields must be here
        // { title, text, rating }=== body
        if(!body.title|| typeof body.title !== 'string') throw new Error('titleRequired')
        if(!body.text || typeof body.text !== 'string') throw new Error('textRequired')
        if(!body.rating || typeof body.rating !== 'number' || !Number.isFinite(body.rating) || !Number.isInteger(body.rating)) throw new Error('ratingRequired')
        

    } else {
        // need at least one

	    if (!body.title && !body.text && !body.rating) throw new Error('aReviewFieldRequired')
        
    }
    return true
}


async function snackBodyInspect(body, action) {
    if (action === "create") {
        if(!body.name|| typeof body.name !== 'string') throw new Error('snackNameWrong')
        if(!body.description || typeof body.description !== 'string') throw new Error('snackDescriptionWrong')
        if(!body.price) throw new Error('snackPriceWrong')
        if(!body.img || typeof body.img !== 'string') throw new Error('snackImgWrong')
        if(typeof body.is_perishable !== 'boolean' ) throw new Error('snackPerishableWrong')
    } else {
        if (!body.name && !body.description && !body.price && !body.img && body.is_perishable === undefined) throw new Error('aFieldRequired')
    }
    console.log("inspecting ",body);
    return true
}

    
module.exports = { reviewBodyInspect, snackBodyInspect }