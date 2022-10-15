import dotenv, { DotenvConfigOutput } from 'dotenv';

const { parsed }: DotenvConfigOutput = dotenv.config()

export default parsed