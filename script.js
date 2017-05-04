$.ajax({
    url:"https://quarkbackend.com/getfile/karbassi/user-profiles",
    type:"GET",
    success: function(response) {
        // console.log(response);
    
        var firstUser = response[0];
       
        console.log(firstUser);

     for (var i=0; i< response.length; i++){
         var user = response[i];
         updateUserInformation(i,user);
     }

    }
});

function updateUserInformation(index, user){

   var 
    $user = $('.user-profile').eq(index);
    //Background-color
    $user.css("background-color", user.favoriteColor);
    //photo
    $user.find(".thumbnail").find("img").text(user.picture).attr("src", user.picture);
    //name
    $user.find('h3').text(user.name.first + " " + user.name.last);
    //company name
    $user.find('.company').find('.name').text(user.company.name);
    //street
    $user.find('.street').text(user.company.address.street);
    //city
    $user.find('.city').text(user.company.address.city);
    //state
    $user.find('.state').text(user.company.address.state);
    //zip
    $user.find('.zip').text(user.company.address.zip);
    //email
    $user.find('.company') .find('a').text(user.company.email).attr('href',"mailto:" + user.company.email);
}




