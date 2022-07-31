import bcrypt from "bcrypt";

// hashes password using bcrypt and returns hash
const hashPassword : string = (password : string) => {
    const saltRounds:number = 10;
    password = await bcrypt(password, saltRounds);

    return password;
}

const passwordIsCorrect : boolean = (password : string) => {
    // find user by email/id
    // hash password and compare to input password
    // if same return true, else false
    // if user doesn't exist, return false
}

export default { hashPassword, passwordIsCorrect }