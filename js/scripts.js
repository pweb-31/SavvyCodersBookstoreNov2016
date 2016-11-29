// Put all of your jQuery and JavaScript in this document.
var book1 = {
    "id": 1,
    "name": "Lasagna: A Retrospective",
    "author": "Garfield"
    "picture_url": "http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
    "price": 24,
    "selling_points": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
    ]
}

var book2 = {
    "id": 2,
    "name": "How Many Hot Wings are Too Many?",
    "author": "Jane Smith"
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/51je868YWML._SY160_.jpg",
    "price": 24,
    "selling_points": [
        "Hot wings have no pork.",
        "Hot wings heat up wellthe nest day.",
        "Real G's move silent, like Lasagna. -Lil WayneEverybody loves hot wings!"
    ]
}

  $('book1 .name').text(book1.name)

  $('book1 .author').text(book1.author)

  $('book1 .picture_url').text(book1.picture_url)

  $('book1 .price').text(book1.price)

  $('book1 .selling_points').text(book1.selling_points)

  $('book2 .name').text(book2.name)

  $('book2 .author').text(book2.author)

  $('book2 .picture_url').text(book2.picture_url)

  $('book2 .price').text(book2.price)

  $('book2 .selling_points').text(book2.selling_points)
