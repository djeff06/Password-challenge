const {readFileSync, existsSync, appendFileSync, writeFileSync} = require('fs');


const storePassword=(path='./pass.txt',key='djeff06',pwd='djeff06-pass') => {
    
    //* we define the format that we want to store as key:password 
    const write = `${key}:${pwd}\n`;
   //*First we check if the file already exists
    if (existsSync(path)) {
        //* This function adds a new line to the content of the file ( because it already exists )
        appendFileSync(path, write, 'utf8', err => {
            if (err){
                console.log(err)
            } console.log('write-file success')
        })
    }
    else
    {
        //* we store it directly to the FILE
        writeFileSync(path, write, err => {
            if (err){
                console.log( 'error :', err)
            }
        })
    }
}

storePassword()


const retrievePassword=(path='./pass.txt', user='djeff06') => {
    if (!existsSync(path)) { 
        throw new Error("File does not exist, cannot retrieve password")
    }
    else {
        const lines = readFileSync(path).toString().split("\n")
        for (const line of lines) {
          
            //* split it to have the password
           const [key,pwd] = line.split(':')
           
            //* if key is correct return password
           if(user === key && pwd!== undefined && pwd.length !==0) 
           {
             return ( pwd,
                console.log(`The password is = ${pwd}`))
           }
        }
         //* in all other cases we return undefined
        return undefined
    }

}
 retrievePassword()