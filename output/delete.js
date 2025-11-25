

const fs=require('fs')

//  fs.writeFileSync('./temp.text','If you want, send me your folder screenshot or tell me the file name — I’ll guide you.')
//   if(fs.existsSync('/temp.text')){
//     console.log('fill exist');
//   }

//    try {
//     fs.unlinkSync('./temp.text')
//    } catch (error) {
//      console.log( error.message);
//    }
      fs.writeFile('./temp2.txt',"Aother temp file",(error)=>{
         if(error)  return console.error(error.message);

           console.log("Another temp file created");
          fs.unlink("./temp2.txt", (error) => {
    if (error) {
      console.error("Error :", error.message);
    } else {
      console.log("Temp2 deleted");
    }
  });
})
   