# galvanize-snacks-api

## Database Structure

![](./images/Snacks-ERD.png)

## Setup

```shell
npm run setup
```

## Routes

Get ALL snacks
**GET /api/snacks**

Get ONE snack via ID will all related reviews
**GET /api/snacks/:id**

Create a snack 
**POST /api/snacks**
required fields:
```
{
    name,           //STRING
    description,    //STRING
    price,          //FLOAT
    img,            //STRING
    is_perishable   //BOOLEAN
}
```

Create a review for a snack
**POST /api/snacks/:id/reviews**
required fields:
```
{
	title,          //STRING
    text,           //STRING
    rating,         //INTEGER
}
```

Update a snack
**PATCH /api/snacks/:id**
at least one(1) of the following fields is required:
```
{
    name,           //STRING
    description,    //STRING
    price,          //FLOAT
    img,            //STRING
    is_perishable   //BOOLEAN
}
```

Update a review for a snack
**PATCH /api/snacks/:id/reviews/:id**
at least one(1) of the following fields is required:
```
{
	title,          //STRING
    text,           //STRING
    rating,         //INTEGER
}
```

Delete a snack and all related reviews
**DELETE /api/snacks/:id**

Delete a review
**DELETE /api/snacks/:id/reviews/:id**
