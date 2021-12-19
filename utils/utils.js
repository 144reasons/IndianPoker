function pswd(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRTVWXYZ'; // I dont want any password to be susy or something with sus so i removed s and u
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

module.exports = {
    pswd
}