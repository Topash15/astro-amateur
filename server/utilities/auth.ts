import bcrypt from "bcrypt";

// hashes password using bcrypt and returns hash
export const hashPassword = async (password : string) => {
    const saltRounds:number = 10;
    password = await bcrypt.hash(password, saltRounds);
    return password;
}

export const passwordIsCorrect = async (password : string, passwordHash : string) => {
    const correctPassword = await bcrypt.compare(password, passwordHash);
    return correctPassword;
}