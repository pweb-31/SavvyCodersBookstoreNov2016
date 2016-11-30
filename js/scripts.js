// Put all of your jQuery and JavaScript in this document.
var book1 = {
    "id": 1,
    "name": "Lasagna: A Retrospective",
    "author": "Garfield",
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
    "name": "How Many Hot Wings Are Too Many?",
    "author": "Jane 'Hot Wings' Jones",
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/51je868YWML._SY160_.jpg",
    "price": 24,
    "selling_points": [
        "Hot wings have no pork.",
        "Hot wings heat up well the next day.",
        "Everybody loves hot wings!"
    ]
}

var album1 = {
    "id": 3,
    "name": "The White Album",
    "author": "The Beatles",
    "picture_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAYFBMVEX////09PShn6Di4d+XlZba2tr8/PzOy8zW1tbc3NyamZf39/fj4uLGxMWmpKXv7e64treuravCwb+1sK+Rj5DW0dCbm5jR0tCinJvy8u+VlZOSjY/Ix8jr6uv///2/u7xZ1YQwAAABpElEQVR4nO3VTXOcMAyAYZn1F9gYgzeBbmD5//8ydptDbtke2k1m3ufCjMxBGkm2CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBv7f7lH9b+hzT+LRuUmoLIEeUw3rsYXY2qXErqQ9HaPTvBBwVj/Op786lrTms926j1oKNIdwumbFv2rqtnx9X1vRqTxE49L+m/MaU05P08pc3c9HvwXArh7XJcVRvEY5trr8YisrYCp6uJvfU6+x9SX3UZ7jLOaYghpW6qgfXVLZudbjnPSs6z7+6yJxG/1bNJp7lG49gN07MTf9RlsK2APLpy5CytwHXd1l+3te+t7fJyu9SmfhSo3lpdy15H1z8574dFHcQVGZdldu6lBnydxZLVNdZLJmr3Uoq0/fP6PJdwTSntUZf0U3awFahah8YcX31pd6PXXddFpYdBu7G29EjBnPUz7vtqV2/6Q5SJ4dl5P2wqdaecRCOX3bRAOKZ629gQ/jx2969fRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgG/oHWLCD+U5QhaqAAAAAElFTkSuQmCC",
    "price": 20,
    "selling_points": [
        "Best Beatles Album!",
        "I don't know where the time went!",
    ]
}
var book4 = {
    "id": 4,
    "name": "IV",
    "author": "Led Zeppelin",
    "picture_url": "http://img.wennermedia.com/660-width/rs-138091-20121120-ledzepiv-x306-1353427287.jpg",
    "price": 25,
    "selling_points": [
        "Defining album of Rock n Roll.",
        "Best album cover ever!"
    ]
}
$('#book1 .author').text(book1.author)

$('#book1 .picture_url').attr( "src", book1.picture_url)

$('#book1 .price').text(book1.price)

$('#book1 .selling_points').text(book1.selling_points);

$('#book2').append( "<div>" + book2.name + "</div>");
$('#book2').append( "<div>" + book2.author + "</div>");
$('#book2').append( "<div>" + "<img src= '" + book2.picture_url + "'/></div>");
$('#book2').append( "<div>" + book2.price + "</div>");
$('#book2').append( "<ul><li> " + book2.selling_points[0] + "</li>" + "<li>"
+ book2.selling_points[1] +"<li>" + book2.selling_points[2]+ "</li></ul>");


var $form = $( "form" );
var $target = $( "<div id='album1'>");

var $name = $( "<h3 class='name'>" ).text( album1.name );
var $author = $( "<div class='author'>" ).text( album1.author );
var $image = $( "<img>" ).attr( "src", album1.picture_url );
var $price = $( "<div>" ).text( "Price: $" + album1.price );
var $selling_points = $( "<ul>" );
var counter = 0;

while( counter < album1.selling_points.length ){
    $selling_points.append( "<li>" + album1.selling_points[ counter ] + "</li>" );

    counter++;
}

$target.append( $name, $author, $image, $price, $selling_points );
$form.before( $target );
