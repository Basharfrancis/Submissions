
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var arraySTR = text.trim('').split(" ")
  var ararArra = text.trim('').split(" ")
  var grrfc = text.trim('').split(" ")

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(arraySTR[0] === 'hello' || text==='hello\n'){
    hello(arraySTR);
  }
  else if (text === 'help\n'){
    help();
  }
  else if (text === 'list\n'){
    list(listArry);
  }
  else if (ararArra[0] === 'add' ||text === 'add\n'){
    add(ararArra,listArry);
  }
  else if (grrfc[0] === 'remove' || text === 'remove\n'){
    remove(grrfc,text);
  }
  // else if(text === 'remove 1\n'){
  //   removeFirst();
  // }
  // else if (text === 'remove 2\n'){
  //   removeSecond();
  // }
  else if(arraySTR[0] === 'edit' || text === 'edit\n'){
    edit(arraySTR,text);
  }
  else{
    unknownCommand(text);
  }
}
var listArry = ['task1','task2','task3','task4'];



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(t){
  console.log(t.join(" ")+'!')

}
/** type help if you want to know all possible commands in this application
 * @returns {void}
*/
function help(){
  console.log('help..\nyou can change your name\nalso you can type hello!\nin order to hello you can type any text you want start with "hello"\nalso you can exit or quit from application\nunknown command if all other command failed also we add 3 remove command to remove first and second and the last elemnt from list\n  \nfor more information call 0011')
}
//console.log(list)
function list(basharArray){
  for(var i =0; i<basharArray.length; i++){
  console.log([i+1] +")"+ basharArray[i])
  }
 
}
function add(hadiraArray,listArry){
  if(hadiraArray[1]){
    hadiraArray.shift()
    listArry.push(hadiraArray.join(" "))
  }
  else{
  
  console.log("error")
  }
}
function remove(grrfc,text){
  if (text === 'remove\n'){
    listArry.pop()
  }
  else if(grrfc[1] > listArry.length ){
    console.log("number does not exist")
  }
  else{
    listArry.splice(grrfc[1]-1, 1)
  }

  
}
// function removeFirst(){
//   listArry.shift();
// }
// function removeSecond (){
//   listArry.splice(1,1);
// }
function edit(arraySTR,text){

  console.log(arraySTR, text)
  if(text === 'edit\n'){
    console.log('error')
  }
  else if(arraySTR.join(" ")){
    arraySTR.shift()

    listArry.splice(listArry.length-1,1,"new text")
  }
  else if(arraySTR.join(" ")){

    listArry.splice(arraySTR[1]-1,1,"new text")
  }
  
  // else if([...arraySTR] === 'edit 1 new text'){
  //   listArry.splice(0,1,"new text");
  // }


}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Bashar Francis")
