// como se resuelve lo que se puede consultar
import { tasks } from '../data/sample';
import  User  from '../models/User';

export const resolvers = {

    Query: {
        hello: () => {
            return 'Hello :)';
        },
        test1: () => {
            return 2;
        },
        greet: (root, args, context) => {
            console.log(context);
            return `Hello ${args.name}`;
        },
        hi: (root, {name}) => {
            return `Hello ${name}`;
        },
        tasks: () =>{
            return tasks;
        },
        async users() {
            return await User.find();
        },
    },
    Mutation: {
        createTask(_, { input }) {
            console.log(input);
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser =new User(input);
            console.log(newUser);
            await newUser.save();
            return newUser;
        },
        async deleteUser (_, { _id }) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, { _id, input }) {
            // {new: true} devuelve el ojbeto actualizado, no el anterior
            return await User.findByIdAndUpdate(_id, input, {new: true});
        }
    },
};
// _, (no estoy usando la primera propiedad)